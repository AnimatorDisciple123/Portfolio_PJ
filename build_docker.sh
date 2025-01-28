#!/bin/bash

# Build the Docker image without using cache
docker build --no-cache -t piyush .

# Check if the container exists
if docker ps -a -q --filter "name=piyush-container" | grep -q .; then
    echo "Stopping and removing 'piyush-container'..."
    docker stop piyush-container > /dev/null 2>&1
    docker rm piyush-container > /dev/null 2>&1
fi

# Run the container
echo "Running the container..."
docker run -d -p 8080:80 --name piyush-container -v "$(pwd):/usr/local/apache2/htdocs" piyush:latest
