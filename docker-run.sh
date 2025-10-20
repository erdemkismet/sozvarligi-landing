#!/bin/bash

# Docker build and run script for Sözvarlığı Landing

echo "🚀 Sözvarlığı Landing - Docker Container Setup"
echo "============================================="

# Function to check if Docker is running
check_docker() {
    if ! docker info > /dev/null 2>&1; then
        echo "❌ Docker daemon is not running. Please start Docker first."
        exit 1
    fi
    echo "✅ Docker is running"
}

# Function to build the image
build_image() {
    echo "🔨 Building Docker image..."
    docker build -t sozvarligi-landing:latest .
    if [ $? -eq 0 ]; then
        echo "✅ Image built successfully"
    else
        echo "❌ Build failed"
        exit 1
    fi
}

# Function to run container
run_container() {
    echo "🏃 Starting container..."

    # Stop and remove existing container if exists
    docker stop landing 2>/dev/null
    docker rm landing 2>/dev/null

    # Run new container
    docker run -d \
        --name landing \
        -p 8080:80 \
        --restart unless-stopped \
        sozvarligi-landing:latest

    if [ $? -eq 0 ]; then
        echo "✅ Container 'landing' is running"
        echo "🌐 Access the application at: http://localhost:8080"
    else
        echo "❌ Failed to start container"
        exit 1
    fi
}

# Main execution
case "$1" in
    build)
        check_docker
        build_image
        ;;
    run)
        check_docker
        run_container
        ;;
    all)
        check_docker
        build_image
        run_container
        ;;
    stop)
        echo "⏹️  Stopping container..."
        docker stop landing
        echo "✅ Container stopped"
        ;;
    logs)
        docker logs -f landing
        ;;
    *)
        echo "Usage: $0 {build|run|all|stop|logs}"
        echo ""
        echo "Commands:"
        echo "  build  - Build the Docker image"
        echo "  run    - Run the container (uses existing image)"
        echo "  all    - Build and run"
        echo "  stop   - Stop the container"
        echo "  logs   - Show container logs"
        exit 1
        ;;
esac