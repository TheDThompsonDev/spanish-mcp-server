# Spanish MCP Server - Installation Guide

## Quick Install (Recommended)

### Option 1: Install from NPM
```bash
npm install -g spanish-mcp-server
```

### Option 2: Install from GitHub
```bash
npm install -g git+https://github.com/TheDThompsonDev/spanish-mcp-server.git
```

## Setup with Claude Desktop

1. **Find your Claude Desktop config file:**
   - **Windows**: `%APPDATA%\Claude\claude_desktop_config.json`
   - **macOS**: `~/Library/Application Support/Claude/claude_desktop_config.json`
   - **Linux**: `~/.config/Claude/claude_desktop_config.json`

2. **Add the server configuration:**
   ```json
   {
     "mcpServers": {
       "spanish-learning": {
         "command": "spanish-mcp-server",
         "args": []
       }
     }
   }
   ```

3. **Restart Claude Desktop**

## Verify Installation

Ask Claude any of these questions to test:
- "Translate 'hola' from Spanish to English"
- "Show me the present tense conjugation of 'hablar'"
- "Give me 5 beginner food vocabulary words in Spanish"
- "Explain the difference between 'ser' and 'estar'"

## Available Features

### 🔄 Translation
- Spanish ↔ English translation
- Pronunciation guides
- Example sentences
- Difficulty levels

### 📚 Vocabulary
- Words by topic (greetings, food, verbs)
- Difficulty filtering (beginner, intermediate, advanced)
- Cultural context and usage notes

### 🔤 Verb Conjugation
- Complete conjugation patterns
- Multiple tenses (present, preterite, imperfect, future, conditional)
- Common and irregular verbs

### 📖 Grammar Explanations
- Detailed grammar concepts
- Examples and practice tips
- Common mistakes and corrections

### 🌍 Cultural Context
- Usage etiquette
- Regional variations
- Cultural significance

### 📊 Progress Tracking
- Learning activity tracking
- Score recording
- Progress monitoring

## Troubleshooting

### Server Not Loading
1. Verify installation: `spanish-mcp-server --version`
2. Check config file syntax (valid JSON)
3. Restart Claude Desktop
4. Check Claude Desktop logs

### Permission Issues
```bash
# Fix permissions (macOS/Linux)
chmod +x $(which spanish-mcp-server)

# Reinstall if needed
npm uninstall -g spanish-mcp-server
npm install -g spanish-mcp-server
```

### Manual Installation
If automatic installation fails:

```bash
# Clone and build manually
git clone https://github.com/TheDThompsonDev/spanish-mcp-server.git
cd spanish-mcp-server
npm install
npm run build
npm link

# Then use "spanish-mcp-server" in Claude config
```

## Support

- **Issues**: [GitHub Issues](https://github.com/TheDThompsonDev/spanish-mcp-server/issues)
- **Documentation**: [README.md](README.md)
- **Deployment**: [DEPLOYMENT.md](DEPLOYMENT.md)

## Example Usage

Once installed, you can have conversations like:

**You**: "I want to learn how to greet people in Spanish"

**Claude**: *Uses the Spanish MCP server to provide greeting vocabulary, pronunciation, and cultural context*

**You**: "How do I conjugate 'comer' in the past tense?"

**Claude**: *Uses the conjugation tool to show complete preterite conjugations*

The server seamlessly integrates with Claude to provide rich Spanish learning experiences!