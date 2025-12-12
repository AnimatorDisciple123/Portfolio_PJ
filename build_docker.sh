#!/bin/bash

# Build the Docker image without using cache
docker build --no-cache -t piyush .

# Check if the container exists
if [ "$(docker ps -aq -f name=piyush-container)" ]; then
    echo "Stopping and removing 'piyush-container'..."
    docker stop piyush-container
    docker rm piyush-container
fi

# Run the container
echo "Running the container..."
docker run -d -p 8080:80 --name piyush-container -v "$PWD:/var/www/html" piyush:latest