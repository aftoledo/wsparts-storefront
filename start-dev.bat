@echo off
echo ============================================
echo   WS Parts StoreFront Development Server
echo ============================================
echo.

REM Check if token is provided as argument
if "%~1"=="" (
    echo Starting with saved configuration or use: start-dev.bat YOUR_TOKEN
)

echo Starting StoreFront server...
echo.

REM Run the storefront server with the token from settings.json
fbits.storefront --save --token tcs_wspar_9a164783e0d0472aafe7dc13617393eb

pause