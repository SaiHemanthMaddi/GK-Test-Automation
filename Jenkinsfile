pipeline {
    agent any

    parameters {

        // Select a test folder
        activeChoice(
            name: 'TEST_FOLDER',
            choiceType: 'PT_SINGLE_SELECT',
            description: 'Select the test folder to run',
            script: [
                script: '''
                    def base = new File("${WORKSPACE}/tests")
                    if (!base.exists()) return ['No test folders found']

                    def folders = base.listFiles()
                        .findAll { it.isDirectory() }
                        .collect { "tests/${it.name}" }

                    def finalList = ['All']
                    finalList.addAll(folders)
                    return finalList
                '''
            ]
        )

        // SPEC FILES - auto loaded from selected folder
        reactiveChoice(
            name: 'SPEC_FILE',
            choiceType: 'PT_SINGLE_SELECT',
            referencedParameters: 'TEST_FOLDER',
            description: 'Select a specific spec file (or All)',
            script: [
                script: '''
                    if (!TEST_FOLDER || TEST_FOLDER == 'All') {
                        return ['All']
                    }

                    def folder = new File("${WORKSPACE}/${TEST_FOLDER}")
                    if (!folder.exists()) return ['No specs found']

                    def specs = folder.listFiles()
                        .findAll { it.isFile() && it.name.endsWith(".spec.js") }
                        .collect { it.name }

                    def finalList = ['All']
                    finalList.addAll(specs)

                    return finalList
                ''',
                fallbackScript: "return ['Script Error - Check Jenkins Logs']"
            ]
        )

        choice(
            name: 'BROWSER',
            choices: ['chromium', 'firefox', 'webkit', 'All'],
            description: 'Select browser to run tests'
        )
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
                    def cmd = "npx playwright test"

                    // Folder selection
                    if (params.TEST_FOLDER != 'All') {
                        cmd += " ${params.TEST_FOLDER}"

                        // Spec selection
                        if (params.SPEC_FILE != 'All') {
                            cmd = "npx playwright test ${params.TEST_FOLDER}/${params.SPEC_FILE}"
                        }
                    }

                    // Browser selection
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
