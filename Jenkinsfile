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
        bat '''
        echo Preparing environment...
        set PORT=%PORT%
        set MONGO_URI=%MONGO_URI%
        set VITE_API_URL=%VITE_API_URL%
        echo Environment variables set.
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
