pipeline {
    agent any

    environment {
        BACKEND_IMAGE = 'mern-backend'
        FRONTEND_IMAGE = 'mern-frontend'
        PORT = '5001'
        MONGO_URI = 'mongodb://mongo:27017/resume-builder'
        FRONTEND_PORT = '5173'
        VITE_API_URL = 'http://localhost:5001'  // API endpoint for frontend
    }

    stages {

        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/yogesh087/resume-builder.git'
            }
        }

        stage('Prepare Environment') {
            steps {
                bat '''
                echo Preparing environment...
                set PORT=%PORT%
                set MONGO_URI=%MONGO_URI%
                '''
            }
        }

        // 👇 NEW STAGE — create .env files dynamically
        stage('Create Env Files') {
            steps {
                bat '''
                echo Creating frontend .env file...
                echo VITE_API_URL=%VITE_API_URL%> Frontend\\.env
                echo NODE_ENV=production>> Frontend\\.env
                echo FRONTEND_PORT=%FRONTEND_PORT%>> Frontend\\.env

                echo Creating backend .env file...
                echo PORT=%PORT%> Backend\\.env
                echo MONGO_URI=%MONGO_URI%>> Backend\\.env
                '''
            }
        }

        stage('Build Docker Images') {
            steps {
                script {
                    bat "docker build -t %BACKEND_IMAGE%:latest ./Backend"
                    bat "docker build -t %FRONTEND_IMAGE%:latest ./Frontend"
                }
            }
        }

        stage('Deploy Locally') {
            steps {
                bat "docker-compose down || exit 0"
                bat "docker-compose up -d"
            }
        }
    }
}
