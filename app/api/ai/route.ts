// app/api/ai/route.ts
import { NextResponse } from "next/server";
import { generateText } from "ai";
import { streamText } from "ai";
import { google } from '@ai-sdk/google';
import { spawn } from 'child_process';
import path from 'path';

const model = google('gemini-2.5-flash');

// MCP Server integration
class MCPServer {
  private process: any;
  private messageId = 0;

  constructor() {
    // Path to the MCP server executable
    const mcpServerPath = path.join(process.cwd(), 'mcp-server', 'dist', 'index.js');
    this.process = spawn('node', [mcpServerPath], {
      stdio: ['pipe', 'pipe', 'pipe']
    });
  }

  async callTool(toolName: string, args: any) {
    const message = {
      jsonrpc: "2.0",
      id: this.messageId++,
      method: "tools/call",
      params: {
        name: toolName,
        arguments: args
      }
    };

    return new Promise((resolve, reject) => {
      const timeout = setTimeout(() => {
        reject(new Error('MCP request timeout'));
      }, 10000);

      this.process.stdout.once('data', (data: Buffer) => {
        clearTimeout(timeout);
        try {
          const response = JSON.parse(data.toString());
          if (response.error) {
            reject(new Error(response.error.message));
          } else {
            resolve(response.result);
          }
        } catch (error) {
          reject(error);
        }
      });

      this.process.stdin.write(JSON.stringify(message) + '\n');
    });
  }

  async getAvailableTools() {
    const message = {
      jsonrpc: "2.0",
      id: this.messageId++,
      method: "tools/list",
      params: {}
    };

    return new Promise((resolve, reject) => {
      const timeout = setTimeout(() => {
        reject(new Error('MCP request timeout'));
      }, 10000);

      this.process.stdout.once('data', (data: Buffer) => {
        clearTimeout(timeout);
        try {
          const response = JSON.parse(data.toString());
          if (response.error) {
            reject(new Error(response.error.message));
          } else {
            resolve(response.result);
          }
        } catch (error) {
          reject(error);
        }
      });

      this.process.stdin.write(JSON.stringify(message) + '\n');
    });
  }
}

export async function POST(req: Request) {
  try {
    if (!process.env.GOOGLE_GENERATIVE_AI_API_KEY) {
      return NextResponse.json(
        { error: "Missing GOOGLE_API_KEY. Add it to your .env.local and restart the dev server." },
        { status: 500 }
      );
    }

    const { prompt } = await req.json();

    // Enhanced prompt with MCP context
    let enhancedPrompt = prompt;
    
    // Check if the prompt is asking about project-specific content
    const projectKeywords = [
      'case study', 'airbnb', 'facebook', 'netflix', 'spotify', 'twitter', 'uber',
      'autocomplete', 'carousel', 'charts', 'collapse', 'searchbar', 'sortcomponent', 'splitter',
      'system design', 'frontend', 'architecture', 'component', 'feature',
      'challenge', 'concept', 'learning', 'project structure'
    ];

    const hasProjectContext = projectKeywords.some(keyword => 
      prompt.toLowerCase().includes(keyword.toLowerCase())
    );

    if (hasProjectContext) {
      try {
        const mcpServer = new MCPServer();
        
        // Determine which MCP tool to use based on the prompt
        let mcpResult = null;
        
        if (prompt.toLowerCase().includes('case study') || 
            ['airbnb', 'facebook', 'netflix', 'spotify', 'twitter', 'uber'].some(company => 
              prompt.toLowerCase().includes(company.toLowerCase())
            )) {
          const company = ['airbnb', 'facebook', 'netflix', 'spotify', 'twitter', 'uber'].find(c => 
            prompt.toLowerCase().includes(c.toLowerCase())
          );
          if (company) {
            mcpResult = await mcpServer.callTool('get_case_study', { company });
          }
        } else if (['autocomplete', 'carousel', 'charts', 'collapse', 'searchbar', 'sortcomponent', 'splitter'].some(feature => 
          prompt.toLowerCase().includes(feature.toLowerCase())
        )) {
          const feature = ['autocomplete', 'carousel', 'charts', 'collapse', 'searchbar', 'sortcomponent', 'splitter'].find(f => 
            prompt.toLowerCase().includes(f.toLowerCase())
          );
          if (feature) {
            mcpResult = await mcpServer.callTool('get_feature_component', { feature });
          }
        } else if (prompt.toLowerCase().includes('project structure') || prompt.toLowerCase().includes('file structure')) {
          mcpResult = await mcpServer.callTool('get_project_structure', {});
        } else if (prompt.toLowerCase().includes('concept') || prompt.toLowerCase().includes('learning')) {
          mcpResult = await mcpServer.callTool('get_learning_concepts', {});
        } else if (prompt.toLowerCase().includes('challenge')) {
          mcpResult = await mcpServer.callTool('get_challenge_content', {});
        } else {
          // Default to search if no specific tool matches
          mcpResult = await mcpServer.callTool('search_project_content', { 
            query: prompt,
            fileTypes: ['js', 'ts', 'jsx', 'tsx', 'md']
          });
        }

        if (mcpResult && mcpResult.content && mcpResult.content[0]) {
          enhancedPrompt = `Context from FeaturedApp project:\n\n${mcpResult.content[0].text}\n\nUser question: ${prompt}\n\nPlease provide a comprehensive answer based on the project context above.`;
        }
      } catch (mcpError) {
        console.error('MCP Server error:', mcpError);
        
        // Continue with original prompt if MCP fails
      }
    }

    const { text } = await generateText({
      model,
      prompt: enhancedPrompt,
    });

    return NextResponse.json({ result: text });
  } catch (error: unknown) {
    const message =
      error instanceof Error ? error.message : "Unexpected error while generating text.";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}