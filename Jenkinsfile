pipeline {
    agent any

    parameters {
        activeChoice(name: 'TEST_FOLDER', 
            choiceType: 'PT_SINGLE_SELECT', 
            description: 'Select the test folder to run', 
            script: [
                script: '''
                    return ['All', 'tests/advanced', 'tests/basic', 'tests/buggy', 'tests/business', 'tests/complex', 'tests/intermediate', 'tests/system']
                '''
            ]
        )
        
        reactiveChoice(name: 'SPEC_FILE', 
            choiceType: 'PT_SINGLE_SELECT', 
            referencedParameters: 'TEST_FOLDER', 
            description: 'Select a specific spec file (or All)', 
            script: [
                script: '''
                    if (TEST_FOLDER == 'All') {
                        return ['All']
                    }
                    
                    def specs = []
                    specs.add('All')
                    
                    // Map of folders to specs (hardcoded for reliability without workspace access)
                    def specMap = [
                        'tests/advanced': ['canvas.spec.js', 'charts.spec.js', 'dynamic_ids.spec.js', 'hidden_elements.spec.js', 'iframes.spec.js', 'infinite_scroll.spec.js', 'multiple_windows.spec.js', 'popups_modals.spec.js', 'shadow_dom.spec.js', 'toast.spec.js'],
                        'tests/basic': ['buttons.spec.js', 'checkbox.spec.js', 'dropdown.spec.js', 'form_actions.spec.js', 'links.spec.js', 'password.spec.js', 'radio.spec.js', 'text_inputs.spec.js'],
                        'tests/buggy': ['case_sensitive.spec.js', 'common_pitfalls.spec.js', 'delayed_loading.spec.js', 'disabled_button.spec.js', 'double_click.spec.js', 'duplicate_ids.spec.js', 'dynamic_ids.spec.js', 'hidden_input.spec.js', 'overlapping.spec.js', 'race_condition.spec.js', 'stale_reference.spec.js', 'viewport.spec.js', 'whitespace.spec.js'],
                        'tests/business': ['contact_form.spec.js', 'product_filters.spec.js', 'shopping_cart.spec.js', 'user_auth.spec.js'],
                        'tests/complex': ['api_dynamic.spec.js', 'delayed_loading.spec.js', 'dynamic_table.spec.js', 'hidden_elements.spec.js', 'realtime_poll.spec.js', 'realtime_ws.spec.js', 'retry_logic.spec.js'],
                        'tests/intermediate': ['auto_suggest.spec.js', 'copy_paste.spec.js', 'date_pickers.spec.js', 'drag_drop.spec.js', 'file_ops.spec.js', 'mouse_interactions.spec.js', 'progress.spec.js', 'sliders.spec.js'],
                        'tests/system': ['browser_info.spec.js', 'cookie.spec.js', 'geolocation.spec.js', 'language.spec.js', 'notifications.spec.js', 'storage.spec.js']
                    ]
                    
                    if (specMap.containsKey(TEST_FOLDER)) {
                        specs.addAll(specMap[TEST_FOLDER])
                    } else {
                        specs.add('No specs found')
                    }
                    
                    return specs
                '''
            ]
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
                        
                        // Handle Spec File Selection (only if specific folder selected)
                        if (params.SPEC_FILE != 'All' && params.SPEC_FILE != 'No specs found') {
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
