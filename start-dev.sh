#!/bin/bash
# WS Parts StoreFront Development Server
# Usage: ./start-dev.sh [port]

PORT=${1:-3000}
TOKEN="tcs_wspar_9a164783e0d0472aafe7dc13617393eb"

echo "============================================"
echo "  WS Parts StoreFront Development Server"
echo "============================================"
echo ""
echo "Starting server on port $PORT..."
echo ""

# Run the storefront server
fbits.storefront --save --token "$TOKEN" --port "$PORT"

echo ""
echo "Server stopped."
echo "Press Enter to exit..."
read