@echo off
echo ============================================
echo   WS Parts StoreFront Development Server
echo ============================================
echo.

REM Check if token is provided as argument
if "%~1"=="" (
    set "STOREFRONT_TOKEN=tcs_wspar_9a164783e0d0472aafe7dc13617393eb"
) else (
    set "STOREFRONT_TOKEN=%~1"
)

echo Starting StoreFront server...
echo.

set "STOREFRONT_EXE=fbits.storefront"
if exist "%~dp0.context\tools\storefront-local\fbits.storefront.exe" (
    set "STOREFRONT_EXE=%~dp0.context\tools\storefront-local\fbits.storefront.exe"
)

REM Run from the current repository root. Do not use --save: it writes config
REM next to the installed binary and can fail under Program Files.
"%STOREFRONT_EXE%" --token %STOREFRONT_TOKEN% --port 5501

pause
