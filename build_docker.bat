@echo off
docker build --no-cache -t piyush .

REM Stop and remove the container if it exists
docker ps -a -q --filter "name=piyush-container" >nul 2>&1
if not errorlevel 1 (
    echo "Stopping and removing 'piyush-container'..."
    docker stop piyush-container >nul 2>&1
    docker rm piyush-container >nul 2>&1
)

echo "Running the container..."
docker run -d -p 8080:80 --name piyush-container -v "%cd%:/var/www/html" piyush:latest
pause