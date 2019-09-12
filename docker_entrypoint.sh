#!/bin/bash

echo "Starting API...";
dotnet api/out/api.dll > api.log &

printenv PORT

echo "Starting UI...";
cd ui && npm start