pipeline {
    agent any

    parameters {
        choice(name: 'TEST_FOLDER', 
            choices: ['All', 'tests/advanced', 'tests/basic', 'tests/buggy', 'tests/business', 'tests/complex', 'tests/intermediate', 'tests/system'], 
            description: 'Select the test folder to run'
        )
        
        string(name: 'SPEC_FILE', 
            defaultValue: '', 
            description: 'OPTIONAL: Enter specific spec filename (e.g. "login.spec.js"). Leave empty to run all tests in the selected folder.'
        )

        choice(name: 'BROWSER', choices: ['chromium', 'firefox', 'webkit', 'All'], description: 'Select browser to run tests on')
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
                    
                    // 1. Handle Folder Selection
                    if (params.TEST_FOLDER != 'All') {
                        cmd += " ${params.TEST_FOLDER}"
                    }
                    
                    // 2. Handle Spec File Selection
                    if (params.SPEC_FILE != '' && params.SPEC_FILE != 'All') {
                        // If a specific file is named, Playwright can usually find it by name alone.
                        // But if a folder is ALSO selected, we construct the path for precision.
                        if (params.TEST_FOLDER != 'All') {
                            cmd = "npx playwright test ${params.TEST_FOLDER}/${params.SPEC_FILE}"
                        } else {
                            // If Folder is All, just search for the file
                            cmd = "npx playwright test ${params.SPEC_FILE}"
                        }
                    }
                    
                    // 3. Handle Browser Selection
                    if (params.BROWSER != 'All') {
                        cmd += " --project=${params.BROWSER}"
                    }
                    
                    echo "Running command: ${cmd}"
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
