#!groovy
pipeline {
  agent none

  environment {
    NX_BRANCH = "main"
    CHANGE_TARGET = "dev"
  }
  
  tools {nodejs "NodeJS"}

  stages {
    stage('Pipeline') {
      parallel {
        stage('Main') {
          agent any
          
          steps {
            echo "Running npm ci..."
            sh "npm ci"

            echo "git fetch..."
            sh "git fetch origin main:refs/remotes/origin/main"
            echo "chmod +x /var/jenkins_home/workspace/First_pipeline_for_nx_java_react/java/apps/hello-java/hello-java/mvnw"
            sh "chmod +x /var/jenkins_home/workspace/First_pipeline_for_nx_java_react/java/apps/hello-java/hello-java/mvnw"
            echo "npx nx affected lints..."
            sh "npx nx affected  --target=lint  --base=HEAD~1"
            echo "npx nx affected tests..."
            sh "npx nx affected  --target=test  --base=HEAD~1"
            echo "npx nx builds..."
            sh "npx nx affected  --target=build  --base=HEAD~1"
          }
        }
      }
    }
  }
}
