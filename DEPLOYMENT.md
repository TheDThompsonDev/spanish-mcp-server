# Spanish MCP Server - Deployment & Usage Guide

## Quick Start

### 1. Build the Project
```bash
npm install
npm run build
```

### 2. Test the Server
```bash
npm start
```

## Deployment Options

### Option 1: Local MCP Server (Recommended)

This is the most common way to use MCP servers with AI assistants like Claude Desktop.

#### Step 1: Build and Install
```bash
# In your project directory
npm run build

# Optional: Install globally for easier access
npm install -g .
```

#### Step 2: Configure Claude Desktop
Add this server to your Claude Desktop configuration file:

**Windows**: `%APPDATA%\Claude\claude_desktop_config.json`
**macOS**: `~/Library/Application Support/Claude/claude_desktop_config.json`
**Linux**: `~/.config/Claude/claude_desktop_config.json`

```json
{
  "mcpServers": {
    "spanish-learning": {
      "command": "node",
      "args": ["C:/Users/danny/Documents/coding/spanish-mcp-server/dist/index.js"],
      "env": {}
    }
  }
}
```

#### Step 3: Restart Claude Desktop
Close and reopen Claude Desktop to load the new server.

### Option 2: Global Installation

```bash
# Install globally
npm install -g .

# Then use in Claude Desktop config:
{
  "mcpServers": {
    "spanish-learning": {
      "command": "spanish-mcp-server",
      "args": [],
      "env": {}
    }
  }
}
```

### Option 3: Development Mode

For development and testing:

```bash
# Terminal 1: Start development server
npm run dev

# Terminal 2: Test the server
echo '{"jsonrpc": "2.0", "id": 1, "method": "tools/list", "params": {}}' | node dist/index.js
```

## Usage Examples

Once deployed, you can use these tools in Claude Desktop:

### 1. Translate Words
```
Can you translate "hola" from Spanish to English?
```

### 2. Conjugate Verbs
```
Show me the present tense conjugation of "hablar"
```

### 3. Get Vocabulary by Topic
```
Give me 5 beginner-level food vocabulary words in Spanish
```

### 4. Explain Grammar
```
Explain the difference between "ser" and "estar"
```

### 5. Cultural Context
```
What's the cultural context for using "tú" vs "usted"?
```

## Available Tools

| Tool | Description | Example Usage |
|------|-------------|---------------|
| `translate_word` | Translate Spanish ↔ English | "Translate 'casa' to English" |
| `conjugate_verb` | Get verb conjugations | "Conjugate 'comer' in present tense" |
| `get_vocabulary_by_topic` | Get vocabulary by category | "Show me greeting words" |
| `explain_grammar` | Grammar explanations | "Explain present tense" |
| `get_cultural_context` | Cultural usage notes | "Cultural context for 'gracias'" |
| `track_progress` | Track learning progress | "Track my vocabulary progress" |

## Available Resources

| Resource URI | Description |
|--------------|-------------|
| `spanish://vocabulary/greeting` | Greeting vocabulary |
| `spanish://vocabulary/food` | Food vocabulary |
| `spanish://vocabulary/verb` | Verb vocabulary |
| `spanish://grammar/verb_tense` | Verb tense explanations |
| `spanish://conjugation/hablar` | Hablar conjugations |
| `spanish://conjugation/comer` | Comer conjugations |
| `spanish://mixed/beginner` | Beginner learning pack |
| `spanish://mixed/intermediate` | Intermediate learning pack |

## Troubleshooting

### Server Not Loading
1. Check that the path in `claude_desktop_config.json` is correct
2. Ensure Node.js >= 18 is installed
3. Verify the build completed successfully (`dist` folder exists)
4. Restart Claude Desktop after configuration changes

### Permission Issues
```bash
# On Windows, you might need to run as administrator
# On macOS/Linux, ensure execute permissions:
chmod +x dist/index.js
```

### Testing the Server Manually
```bash
# Test if the server starts
node dist/index.js

# Test with a simple JSON-RPC call
echo '{"jsonrpc": "2.0", "id": 1, "method": "tools/list", "params": {}}' | node dist/index.js
```

## Development

### File Structure
```
spanish-mcp-server/
├── src/
│   ├── index.ts          # Main server code
│   └── data/
│       ├── vocabulary.ts  # Vocabulary data
│       ├── conjugations.ts # Verb conjugations
│       ├── grammar.ts     # Grammar explanations
│       └── cultural.ts    # Cultural context
├── dist/                 # Built JavaScript files
├── package.json
└── README.md
```

### Adding New Data
1. Edit the appropriate data file in `src/data/`
2. Rebuild: `npm run build`
3. Restart Claude Desktop

### Extending Functionality
1. Add new tools in `src/index.ts`
2. Update the tool list in `ListToolsRequestSchema` handler
3. Add the tool implementation in `CallToolRequestSchema` handler
4. Rebuild and test

## Next Steps

1. **Test the deployment** - Try asking Claude to translate a word
2. **Explore the tools** - Use different Spanish learning features
3. **Customize the data** - Add your own vocabulary or grammar rules
4. **Share feedback** - Report any issues or suggest improvements

The server is now ready to help with Spanish language learning through Claude Desktop!