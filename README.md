# Docker Node Express Server

A simple Node.js Express server running in a Docker container.

## 🚀 Features

- Express.js server
- Docker containerization
- Simple API endpoint
- Environment variable support

## 📋 Prerequisites

- Docker installed on your system
- Node.js (for local development)

## 🛠️ Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd docker_node_express
```

2. Build the Docker image:
```bash
docker build -t docker-node-express .
```

3. Run the container:
```bash
docker run -p 5500:5500 docker-node-express
```

## 🐳 Docker Commands

### Basic Commands
```bash
# Build image
docker build -t docker-node-express .

# Run container
docker run -p 5500:5500 docker-node-express

# List running containers
docker ps

# List all containers (including stopped)
docker ps -a

# Stop container
docker stop <container-id>

# Remove container
docker rm <container-id>

# Remove image
docker rmi docker-node-express
```

### Development Commands
```bash
# Run with volume mounting for development
docker run -p 5500:5500 -v $(pwd):/app docker-node-express

# Run in detached mode
docker run -d -p 5500:5500 docker-node-express

# View container logs
docker logs <container-id>
```

## 🌐 API Endpoints

- `GET /`: Returns a JSON response with server status
  ```json
  {
    "message": "success",
    "status": "200",
    "server_type": "docker node server"
  }
  ```

## 📝 Project Structure

```
.
├── Dockerfile
├── index.js
├── package.json
└── README.md
```

## 👨‍💻 Author

**Ashutosh Kumar**

- 🌐 [Portfolio](https://www.devashu.tech/)
- 💼 [LinkedIn](https://www.linkedin.com/in/ashukr321/)
- 📦 [npm](https://www.npmjs.com/~ashukr321)
- 🐳 [Docker Hub](https://hub.docker.com/u/ashukr321)
- 📸 [Instagram](https://www.instagram.com/ashukr321/)

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details. 