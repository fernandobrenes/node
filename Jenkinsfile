pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    dockerImage = docker.build("my-node-app:${env.BUILD_ID}")
                }
            }
        }

        stage('Test') {
            steps {
                sh 'docker run -d -p 8082:8082 my-node-app:${env.BUILD_ID}'
                sleep 10
                sh 'curl http://localhost:8081' // Add tests here
            }
        }

        stage('Deploy') {
            steps {
                script {
                    dockerImage.push()
                    docker.withRegistry('https://your-docker-registry', 'docker-registry-credentials') {
                        dockerImage.push("${env.BUILD_NUMBER}")
                    }
                }
            }
        }
    }

    post {
        success {
            echo 'Deployment successful!'
        }
    }
}