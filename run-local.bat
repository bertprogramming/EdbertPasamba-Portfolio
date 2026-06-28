@echo off
echo Starting portfolio locally...

where node >nul 2>&1
if %errorlevel% neq 0 (
    echo Node.js is not installed. Please install it from https://nodejs.org
    pause
    exit /b 1
)

if not exist node_modules (
    echo Installing dependencies...
    npm install
)

echo Launching dev server at http://localhost:3000
npm start
