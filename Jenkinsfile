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
                    def testCmd = "npx playwright test"
                    
                    // Handle Folder Selection
                    if (params.TEST_FOLDER != 'All') {
                        testCmd += " ${params.TEST_FOLDER}"
                        
                        // Handle Spec File Selection (only if specific folder selected and spec file provided)
                        if (params.SPEC_FILE != '' && params.SPEC_FILE != 'All') {
                            // Construct full path: folder/spec
                            testCmd = "npx playwright test ${params.TEST_FOLDER}/${params.SPEC_FILE}"
                        }
                    }
                    
                    // Handle Browser Selection
                    if (params.BROWSER != 'All') {
                        testCmd += " --project=${params.BROWSER}"
                    }
                    
                    echo "Running command: ${testCmd}"
                    bat testCmd
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
