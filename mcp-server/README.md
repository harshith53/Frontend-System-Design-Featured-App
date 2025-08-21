# FeaturedApp MCP Server

This MCP (Model Context Protocol) server provides AI assistants with access to the FeaturedApp project's content, including case studies, UI components, learning materials, and system design concepts.

## Features

The MCP server provides the following tools:

### 1. `get_project_structure`
- **Description**: Get the structure of the FeaturedApp project
- **Parameters**: 
  - `path` (optional): Specific path to explore (defaults to root)
- **Use Case**: Understanding project organization and file structure

### 2. `get_case_study`
- **Description**: Get content from a specific case study
- **Parameters**:
  - `company` (required): Company name (airbnb, facebook, netflix, spotify, twitter, uber)
- **Use Case**: Access detailed system design case studies for learning

### 3. `get_feature_component`
- **Description**: Get a specific UI feature component
- **Parameters**:
  - `feature` (required): Feature name (autocomplete, carousel, charts, collapse, searchbar, sortcomponent, splitter)
- **Use Case**: Access implementation details of UI components

### 4. `get_learning_concepts`
- **Description**: Get system design concepts and learning materials
- **Parameters**:
  - `concept` (optional): Specific concept to retrieve
- **Use Case**: Access learning materials and system design principles

### 5. `search_project_content`
- **Description**: Search for content across the entire project
- **Parameters**:
  - `query` (required): Search query
  - `fileTypes` (optional): Array of file types to search in
- **Use Case**: Find specific content or patterns across the project

### 6. `get_challenge_content`
- **Description**: Get interactive challenges and exercises
- **Parameters**:
  - `challengeType` (optional): Challenge type to filter by
- **Use Case**: Access practice exercises and challenges

## Installation

1. Navigate to the MCP server directory:
```bash
cd mcp-server
```

2. Install dependencies:
```bash
npm install
```

3. Build the project:
```bash
npm run build
```

## Usage

### Development Mode
```bash
npm run dev
```

### Production Mode
```bash
npm start
```

## Integration with AI Assistants

### Claude Desktop
Add this to your `claude_desktop_config.json`:

```json
{
  "mcpServers": {
    "featuredapp": {
      "command": "node",
      "args": ["/path/to/your/project/mcp-server/dist/index.js"],
      "env": {}
    }
  }
}
```

### Other MCP-Compatible Clients
The server communicates via stdio and follows the MCP specification. It can be integrated with any MCP-compatible client.

## Example Usage Scenarios

### 1. Learning System Design
```
User: "Show me how Netflix handles frontend architecture"
AI: Uses get_case_study("netflix") to retrieve Netflix's system design
```

### 2. Component Implementation
```
User: "How do I implement an autocomplete component?"
AI: Uses get_feature_component("autocomplete") to show implementation
```

### 3. Project Exploration
```
User: "What's the structure of this project?"
AI: Uses get_project_structure() to show the project organization
```

### 4. Content Search
```
User: "Find all references to React hooks in the project"
AI: Uses search_project_content("React hooks", ["js", "ts"]) to search
```

## Benefits for Your Project

1. **Enhanced AI Assistant**: Your AI assistant can now access all project content
2. **Contextual Learning**: AI can provide specific examples from your case studies
3. **Code Examples**: Direct access to UI component implementations
4. **Project Navigation**: AI can help users understand project structure
5. **Content Discovery**: Search functionality helps find relevant materials

## Architecture

The MCP server is built with:
- **TypeScript**: For type safety and better development experience
- **MCP SDK**: Official Model Context Protocol SDK
- **fs-extra**: Enhanced file system operations
- **Stdio Transport**: Standard input/output communication

## Error Handling

The server includes comprehensive error handling:
- File not found errors with helpful suggestions
- Invalid parameter validation
- Graceful fallbacks for missing content
- Clear error messages for debugging

## Contributing

To add new tools or modify existing ones:

1. Add the tool definition in `setupToolHandlers()`
2. Implement the tool method in the class
3. Update this README with the new tool documentation
4. Test with your AI assistant

## License

MIT License - see the main project license for details.
