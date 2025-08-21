#!/usr/bin/env node

import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import {
  CallToolRequestSchema,
  ListToolsRequestSchema,
} from "@modelcontextprotocol/sdk/types.js";
import fs from "fs-extra";
import path from "path";
import { fileURLToPath } from "url";
import { z } from "zod";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Get the project root directory (two levels up from mcp-server)
const PROJECT_ROOT = path.resolve(__dirname, "../..");

class FeaturedAppMCPServer {
  private server: Server;

  constructor() {
    this.server = new Server({
      name: "featuredapp-mcp-server",
      version: "1.0.0",
    });

    this.setupToolHandlers();
  }

  private setupToolHandlers() {
    // List available tools
    this.server.setRequestHandler(ListToolsRequestSchema, async () => {
      return {
        tools: [
          {
            name: "get_project_structure",
            description: "Get the structure of the FeaturedApp project",
            inputSchema: {
              type: "object",
              properties: {
                path: {
                  type: "string",
                  description: "Optional path to explore (defaults to root)",
                },
              },
            },
          },
          {
            name: "get_case_study",
            description: "Get content from a specific case study",
            inputSchema: {
              type: "object",
              properties: {
                company: {
                  type: "string",
                  description: "Company name (e.g., 'airbnb', 'facebook', 'netflix', 'spotify', 'twitter', 'uber')",
                },
              },
              required: ["company"],
            },
          },
          {
            name: "get_feature_component",
            description: "Get a specific UI feature component",
            inputSchema: {
              type: "object",
              properties: {
                feature: {
                  type: "string",
                  description: "Feature name (e.g., 'autocomplete', 'carousel', 'charts', 'collapse', 'searchbar', 'sortcomponent', 'splitter')",
                },
              },
              required: ["feature"],
            },
          },
          {
            name: "get_learning_concepts",
            description: "Get system design concepts and learning materials",
            inputSchema: {
              type: "object",
              properties: {
                concept: {
                  type: "string",
                  description: "Optional specific concept to retrieve",
                },
              },
            },
          },
          {
            name: "search_project_content",
            description: "Search for content across the entire project",
            inputSchema: {
              type: "object",
              properties: {
                query: {
                  type: "string",
                  description: "Search query",
                },
                fileTypes: {
                  type: "array",
                  items: { type: "string" },
                  description: "Optional file types to search in (e.g., ['js', 'ts', 'md'])",
                },
              },
              required: ["query"],
            },
          },
          {
            name: "get_challenge_content",
            description: "Get interactive challenges and exercises",
            inputSchema: {
              type: "object",
              properties: {
                challengeType: {
                  type: "string",
                  description: "Optional challenge type to filter by",
                },
              },
            },
          },
        ],
      };
    });

    // Handle tool calls
    this.server.setRequestHandler(CallToolRequestSchema, async (request) => {
      const { name, arguments: rawArgs } = request.params;

      try {
        switch (name) {
          case "get_project_structure": {
            const parsed = z
              .object({ path: z.string().optional() })
              .parse(rawArgs ?? {});
            return await this.getProjectStructure(parsed.path);
          }
          case "get_case_study": {
            const parsed = z.object({ company: z.string() }).parse(rawArgs ?? {});
            return await this.getCaseStudy(parsed.company);
          }
          case "get_feature_component": {
            const parsed = z.object({ feature: z.string() }).parse(rawArgs ?? {});
            return await this.getFeatureComponent(parsed.feature);
          }
          case "get_learning_concepts": {
            const parsed = z
              .object({ concept: z.string().optional() })
              .parse(rawArgs ?? {});
            return await this.getLearningConcepts(parsed.concept);
          }
          case "search_project_content": {
            const parsed = z
              .object({
                query: z.string(),
                fileTypes: z.array(z.string()).optional(),
              })
              .parse(rawArgs ?? {});
            return await this.searchProjectContent(parsed.query, parsed.fileTypes);
          }
          case "get_challenge_content": {
            const parsed = z
              .object({ challengeType: z.string().optional() })
              .parse(rawArgs ?? {});
            return await this.getChallengeContent(parsed.challengeType);
          }
          default:
            throw new Error(`Unknown tool: ${name}`);
        }
      } catch (error) {
        return {
          content: [
            {
              type: "text",
              text: `Error: ${error instanceof Error ? error.message : "Unknown error"}`,
            },
          ],
        };
      }
    });
  }

  private async getProjectStructure(targetPath?: string): Promise<any> {
    const basePath = targetPath ? path.join(PROJECT_ROOT, targetPath) : PROJECT_ROOT;
    
    if (!await fs.pathExists(basePath)) {
      throw new Error(`Path does not exist: ${targetPath || "root"}`);
    }

    const structure = await this.getDirectoryStructure(basePath, 3);
    
    return {
      content: [
        {
          type: "text",
          text: `Project Structure for ${targetPath || "root"}:\n\n${JSON.stringify(structure, null, 2)}`,
        },
      ],
    };
  }

  private async getDirectoryStructure(dirPath: string, maxDepth: number, currentDepth = 0): Promise<any> {
    if (currentDepth >= maxDepth) {
      return { type: "file", name: path.basename(dirPath) };
    }

    const items = await fs.readdir(dirPath);
    const structure: any = {};

    for (const item of items) {
      if (item.startsWith('.') || item === 'node_modules' || item === 'dist') continue;
      
      const itemPath = path.join(dirPath, item);
      const stats = await fs.stat(itemPath);
      
      if (stats.isDirectory()) {
        structure[item] = await this.getDirectoryStructure(itemPath, maxDepth, currentDepth + 1);
      } else {
        structure[item] = { type: "file", size: stats.size };
      }
    }

    return structure;
  }

  private async getCaseStudy(company: string): Promise<any> {
    const caseStudyPath = path.join(PROJECT_ROOT, "app/case-studies/components");
    const companyFile = `${company}-componentDesign-system.js`;
    const filePath = path.join(caseStudyPath, companyFile);

    if (!await fs.pathExists(filePath)) {
      const availableFiles = await fs.readdir(caseStudyPath);
      throw new Error(`Case study not found for ${company}. Available: ${availableFiles.join(", ")}`);
    }

    const content = await fs.readFile(filePath, "utf-8");
    
    return {
      content: [
        {
          type: "text",
          text: `Case Study: ${company.toUpperCase()}\n\n${content}`,
        },
      ],
    };
  }

  private async getFeatureComponent(feature: string): Promise<any> {
    const featurePath = path.join(PROJECT_ROOT, "app/features", feature);
    
    if (!await fs.pathExists(featurePath)) {
      const availableFeatures = await fs.readdir(path.join(PROJECT_ROOT, "app/features"));
      throw new Error(`Feature not found: ${feature}. Available: ${availableFeatures.join(", ")}`);
    }

    const files = await fs.readdir(featurePath);
    let content = `Feature: ${feature}\n\n`;

    for (const file of files) {
      if (file.endsWith('.js') || file.endsWith('.ts') || file.endsWith('.jsx') || file.endsWith('.tsx')) {
        const filePath = path.join(featurePath, file);
        const fileContent = await fs.readFile(filePath, "utf-8");
        content += `\n--- ${file} ---\n${fileContent}\n`;
      }
    }

    return {
      content: [
        {
          type: "text",
          text: content,
        },
      ],
    };
  }

  private async getLearningConcepts(concept?: string): Promise<any> {
    const conceptsPath = path.join(PROJECT_ROOT, "app/concepts");
    
    if (concept) {
      // Look for specific concept file
      const conceptFile = path.join(conceptsPath, `${concept}.js`);
      if (await fs.pathExists(conceptFile)) {
        const content = await fs.readFile(conceptFile, "utf-8");
        return {
          content: [
            {
              type: "text",
              text: `Concept: ${concept}\n\n${content}`,
            },
          ],
        };
      }
    }

    // Get all concepts
    const files = await fs.readdir(conceptsPath);
    let content = "Available Learning Concepts:\n\n";

    for (const file of files) {
      if (file.endsWith('.js')) {
        const filePath = path.join(conceptsPath, file);
        const fileContent = await fs.readFile(filePath, "utf-8");
        content += `\n--- ${file} ---\n${fileContent}\n`;
      }
    }

    return {
      content: [
        {
          type: "text",
          text: content,
        },
      ],
    };
  }

  private async searchProjectContent(query: string, fileTypes?: string[]): Promise<any> {
    const results: string[] = [];
    
    async function searchDirectory(dirPath: string): Promise<void> {
      const items = await fs.readdir(dirPath);
      
      for (const item of items) {
        if (item.startsWith('.') || item === 'node_modules' || item === 'dist') continue;
        
        const itemPath = path.join(dirPath, item);
        const stats = await fs.stat(itemPath);
        
        if (stats.isDirectory()) {
          await searchDirectory(itemPath);
        } else if (stats.isFile()) {
          const ext = path.extname(item).slice(1);
          if (!fileTypes || fileTypes.includes(ext)) {
            try {
              const content = await fs.readFile(itemPath, "utf-8");
              if (content.toLowerCase().includes(query.toLowerCase())) {
                results.push(`${itemPath}: Found "${query}"`);
              }
            } catch (error) {
              // Skip binary files
            }
          }
        }
      }
    }

    await searchDirectory(PROJECT_ROOT);
    
    return {
      content: [
        {
          type: "text",
          text: `Search results for "${query}":\n\n${results.length > 0 ? results.join('\n') : 'No results found'}`,
        },
      ],
    };
  }

  private async getChallengeContent(challengeType?: string): Promise<any> {
    const challengesPath = path.join(PROJECT_ROOT, "app/challenges");
    
    if (!await fs.pathExists(challengesPath)) {
      throw new Error("Challenges directory not found");
    }

    const files = await fs.readdir(challengesPath);
    let content = "Available Challenges:\n\n";

    for (const file of files) {
      if (file.endsWith('.js')) {
        const filePath = path.join(challengesPath, file);
        const fileContent = await fs.readFile(filePath, "utf-8");
        content += `\n--- ${file} ---\n${fileContent}\n`;
      }
    }

    return {
      content: [
        {
          type: "text",
          text: content,
        },
      ],
    };
  }

  async run() {
    const transport = new StdioServerTransport();
    await this.server.connect(transport);
    console.error("FeaturedApp MCP Server running on stdio");
  }
}

const server = new FeaturedAppMCPServer();
server.run().catch(console.error);
