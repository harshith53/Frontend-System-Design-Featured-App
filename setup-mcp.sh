#!/bin/bash

echo "🚀 Setting up FeaturedApp MCP Server..."

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js first."
    exit 1
fi

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    echo "❌ npm is not installed. Please install npm first."
    exit 1
fi

echo "✅ Node.js and npm are installed"

# Navigate to MCP server directory
cd mcp-server

echo "📦 Installing dependencies..."
npm install

if [ $? -ne 0 ]; then
    echo "❌ Failed to install dependencies"
    exit 1
fi

echo "🔨 Building MCP server..."
npm run build

if [ $? -ne 0 ]; then
    echo "❌ Failed to build MCP server"
    exit 1
fi

echo "✅ MCP server built successfully!"

# Go back to project root
cd ..

echo "🎉 MCP Server setup complete!"
echo ""
echo "📋 Next steps:"
echo "1. Start your Next.js development server: npm run dev"
echo "2. Your AI assistant will now have access to project content"
echo "3. Try asking questions like:"
echo "   - 'Show me the Netflix case study'"
echo "   - 'How do I implement an autocomplete component?'"
echo "   - 'What's the project structure?'"
echo "   - 'Find all React hooks in the project'"
echo ""
echo "🔧 For external MCP clients (like Claude Desktop), add this to your config:"
echo "   \"mcpServers\": {"
echo "     \"featuredapp\": {"
echo "       \"command\": \"node\","
echo "       \"args\": [\"$(pwd)/mcp-server/dist/index.js\"],"
echo "       \"env\": {}"
echo "     }"
echo "   }"
