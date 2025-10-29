pipeline {
    agent any

    environment {
        // Global environment variables
        BACKEND_IMAGE = 'mern-backend'
        FRONTEND_IMAGE = 'mern-frontend'
        PORT = '5001'
        MONGO_URI = 'mongodb://mongo:27017/resume-builder'
        FRONTEND_PORT = '5173'
        VITE_API_URL = 'http://localhost:5001' // 👈 Example for frontend
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/yogesh087/resume-builder.git'
            }
        }

        stage('Prepare Environment') {
            steps {
                sh '''
                echo "Preparing environment..."
                export PORT=$PORT
                export MONGO_URI=$MONGO_URI
                export VITE_API_URL=$VITE_API_URL
                export FRONTEND_PORT=$FRONTEND_PORT
                '''
            }
        }

        stage('Build Docker Images') {
            steps {
                script {
                    // Backend build
                    sh """
                    docker build \
                    -t $BACKEND_IMAGE:latest \
                    --build-arg PORT=$PORT \
                    --build-arg MONGO_URI=$MONGO_URI \
                    ./Backend
                    """

                    // Frontend build
                    sh """
                    docker build \
                    -t $FRONTEND_IMAGE:latest \
                    --build-arg VITE_API_URL=$VITE_API_URL \
                    --build-arg FRONTEND_PORT=$FRONTEND_PORT \
                    ./Frontend
                    """
                }
            }
        }

        stage('Deploy Locally') {
            steps {
                sh 'docker-compose down || true'
                sh 'docker-compose up -d'
            }
        }
    }
}
