pipeline {
    agent any

    parameters {
        string(name: 'TEST_FOLDER', defaultValue: '', description: 'Folder selected from UI')
        string(name: 'SPEC_FILE', defaultValue: 'All', description: 'Spec selected from UI')
        string(name: 'BROWSER', defaultValue: 'chromium', description: 'Browser selected from UI')
    }

    stages {

        stage('Show Parameters') {
            steps {
                echo "TEST_FOLDER = ${params.TEST_FOLDER}"
                echo "SPEC_FILE   = ${params.SPEC_FILE}"
                echo "BROWSER     = ${params.BROWSER}"
            }
        }

        stage('Install Dependencies') {
            steps {
                bat 'npm ci'
            }
        }

        stage('Install Playwright Browsers') {
            steps {
                bat 'npx playwright install --with-deps'
            }
        }

        stage('Run Tests') {
            steps {
                script {

                    def cmd = "npx playwright test"

                    if (params.TEST_FOLDER?.trim()) {
                        cmd += " ${params.TEST_FOLDER}"
                    }

                    if (params.SPEC_FILE != 'All') {
                        cmd = "npx playwright test ${params.TEST_FOLDER}/${params.SPEC_FILE}"
                    }

                    if (params.BROWSER != 'All') {
                        cmd += " --project=${params.BROWSER}"
                    }

                    echo "Running: ${cmd}"
                    bat cmd
                }
            }
        }
    }

    post {
        always {
            archiveArtifacts artifacts: 'playwright-report/**', allowEmptyArchive: true
        }
    }
}
