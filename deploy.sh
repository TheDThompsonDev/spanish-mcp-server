#!/bin/bash

echo "🚀 Spanish MCP Server Deployment Script"
echo "========================================"

# Check if git is initialized
if [ ! -d ".git" ]; then
    echo "📁 Initializing Git repository..."
    git init
    git add .
    git commit -m "Initial commit: Spanish MCP Server"
else
    echo "✅ Git repository already initialized"
fi

# Build the project
echo "🔨 Building project..."
npm run build

# Add shebang if not present
if ! head -1 dist/index.js | grep -q "#!/usr/bin/env node"; then
    echo "🔧 Adding shebang to dist/index.js..."
    sed -i '1i#!/usr/bin/env node' dist/index.js
fi

echo ""
echo "🎯 Choose deployment option:"
echo "1) Publish to NPM (recommended)"
echo "2) Create GitHub repository"
echo "3) Test locally first"
echo "4) All of the above"

read -p "Enter your choice (1-4): " choice

case $choice in
    1|4)
        echo ""
        echo "📦 NPM Publishing Setup"
        echo "======================"
        echo "Before publishing to NPM, you need to:"
        echo "1. Create an NPM account at https://www.npmjs.com"
        echo "2. Run: npm login"
        echo "3. Update package.json with your details"
        echo ""
        read -p "Have you completed the above steps? (y/n): " npm_ready
        
        if [ "$npm_ready" = "y" ]; then
            echo "🚀 Publishing to NPM..."
            npm publish
            echo "✅ Published! Users can now install with:"
            echo "   npm install -g spanish-mcp-server"
        else
            echo "⏸️  Skipping NPM publish. Complete the setup steps first."
        fi
        ;;
esac

case $choice in
    2|4)
        echo ""
        echo "🐙 GitHub Repository Setup"
        echo "=========================="
        echo "To create a GitHub repository:"
        echo "1. Go to https://github.com/new"
        echo "2. Create a repository named 'spanish-mcp-server'"
        echo "3. Copy the repository URL"
        echo ""
        read -p "Enter your GitHub repository URL (or press Enter to skip): " repo_url
        
        if [ ! -z "$repo_url" ]; then
            echo "🔗 Adding GitHub remote..."
            git remote add origin "$repo_url"
            git branch -M main
            git push -u origin main
            echo "✅ Pushed to GitHub!"
        fi
        ;;
esac

case $choice in
    3|4)
        echo ""
        echo "🧪 Testing Locally"
        echo "=================="
        echo "Testing the server..."
        node test-server.js
        ;;
esac

echo ""
echo "🎉 Deployment Complete!"
echo "======================"
echo ""
echo "📋 Next Steps:"
echo "• Share your NPM package: npm install -g spanish-mcp-server"
echo "• Share your GitHub repo: git clone [your-repo-url]"
echo "• Users add this to Claude Desktop config:"
echo ""
echo '{
  "mcpServers": {
    "spanish-learning": {
      "command": "spanish-mcp-server",
      "args": []
    }
  }
}'
echo ""
echo "📚 Documentation:"
echo "• DEPLOYMENT.md - Local deployment guide"
echo "• REMOTE_DEPLOYMENT.md - Remote deployment options"
echo "• README.md - Project overview"