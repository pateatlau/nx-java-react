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
            echo "npx nx run-many -t lint"
            sh "npx nx run-many -t lint"
            echo "npm nx run-many -t test"
            sh "npx nx run-many -t test"
            echo "npx nx run-many -t build"
            sh "npx nx run-many -t build"
          }
        }
      }
    }
  }
}
