#!/bin/bash

# Check if API server is running
echo "Checking API server..."
HTTP_CODE=$(curl -s -o /dev/null -w "%{http_code}" http://localhost:3000/api-json)

if [ "$HTTP_CODE" != "200" ]; then
  echo "Error: API server is not running or not accessible. Please start the API server first."
  exit 1
fi

# Download the swagger.json
echo "Downloading swagger.json..."
curl -s http://localhost:4001/api-json -o swagger.json

# Generate the API client code
echo "Generating API client code..."
pnpm orval

echo "API client code generation complete!"
