pipeline {
    agent any

    environment {
        DOCKER_HUB_USER = 'your_dockerhub_username'
        BACKEND_IMAGE = 'mern-backend'
        FRONTEND_IMAGE = 'mern-frontend'
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/yourusername/yourrepo.git'
            }
        }

        stage('Build Docker Images') {
            steps {
                script {
                    sh 'docker build -t $DOCKER_HUB_USER/$BACKEND_IMAGE:latest ./Backend'
                    sh 'docker build -t $DOCKER_HUB_USER/$FRONTEND_IMAGE:latest ./Frontend'
                }
            }
        }

        stage('Push to Docker Hub') {
            steps {
                script {
                    withCredentials([string(credentialsId: 'dockerhub-token', variable: 'DOCKER_TOKEN')]) {
                        sh """
                        echo $DOCKER_TOKEN | docker login -u $DOCKER_HUB_USER --password-stdin
                        docker push $DOCKER_HUB_USER/$BACKEND_IMAGE:latest
                        docker push $DOCKER_HUB_USER/$FRONTEND_IMAGE:latest
                        """
                    }
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
