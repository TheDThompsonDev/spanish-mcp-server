@echo off
echo 🚀 Spanish MCP Server Deployment Script
echo ========================================

REM Check if git is initialized
if not exist ".git" (
    echo 📁 Initializing Git repository...
    git init
    git add .
    git commit -m "Initial commit: Spanish MCP Server"
) else (
    echo ✅ Git repository already initialized
)

REM Build the project
echo 🔨 Building project...
call npm run build

REM Check if shebang exists
findstr /B "#!/usr/bin/env node" dist\index.js >nul
if errorlevel 1 (
    echo 🔧 Adding shebang to dist/index.js...
    echo #!/usr/bin/env node > temp.js
    type dist\index.js >> temp.js
    move temp.js dist\index.js
)

echo.
echo 🎯 Choose deployment option:
echo 1) Publish to NPM (recommended)
echo 2) Create GitHub repository  
echo 3) Test locally first
echo 4) All of the above

set /p choice="Enter your choice (1-4): "

if "%choice%"=="1" goto npm_deploy
if "%choice%"=="2" goto github_deploy
if "%choice%"=="3" goto test_local
if "%choice%"=="4" goto all_deploy
goto end

:npm_deploy
:all_deploy
echo.
echo 📦 NPM Publishing Setup
echo ======================
echo Before publishing to NPM, you need to:
echo 1. Create an NPM account at https://www.npmjs.com
echo 2. Run: npm login
echo 3. Update package.json with your details
echo.
set /p npm_ready="Have you completed the above steps? (y/n): "

if "%npm_ready%"=="y" (
    echo 🚀 Publishing to NPM...
    call npm publish
    echo ✅ Published! Users can now install with:
    echo    npm install -g spanish-mcp-server
) else (
    echo ⏸️  Skipping NPM publish. Complete the setup steps first.
)

if "%choice%"=="1" goto end

:github_deploy
echo.
echo 🐙 GitHub Repository Setup
echo ==========================
echo To create a GitHub repository:
echo 1. Go to https://github.com/new
echo 2. Create a repository named 'spanish-mcp-server'
echo 3. Copy the repository URL
echo.
set /p repo_url="Enter your GitHub repository URL (or press Enter to skip): "

if not "%repo_url%"=="" (
    echo 🔗 Adding GitHub remote...
    git remote add origin "%repo_url%"
    git branch -M main
    git push -u origin main
    echo ✅ Pushed to GitHub!
)

if "%choice%"=="2" goto end

:test_local
echo.
echo 🧪 Testing Locally
echo ==================
echo Testing the server...
call node test-server.js

:end
echo.
echo 🎉 Deployment Complete!
echo ======================
echo.
echo 📋 Next Steps:
echo • Share your NPM package: npm install -g spanish-mcp-server
echo • Share your GitHub repo: git clone [your-repo-url]
echo • Users add this to Claude Desktop config:
echo.
echo {
echo   "mcpServers": {
echo     "spanish-learning": {
echo       "command": "spanish-mcp-server",
echo       "args": []
echo     }
echo   }
echo }
echo.
echo 📚 Documentation:
echo • DEPLOYMENT.md - Local deployment guide
echo • REMOTE_DEPLOYMENT.md - Remote deployment options  
echo • README.md - Project overview

pause