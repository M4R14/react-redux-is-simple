pipeline {
    agent any
    stages {
        stage('Initialize') {
            echo 'Initializing...'
            def node = tool name: 'Node-7.4.0', type: 'jenkins.plugins.nodejs.tools.NodeJSInstallation'
            env.PATH = "${node}/bin:${env.PATH}"
        }
        stage('Build') {
            echo 'Building dependencies...'
            sh 'npm i'
        }
    }
}
