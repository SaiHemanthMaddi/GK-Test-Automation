const fs = require('fs');
const path = require('path');

/**
 * Global Setup - Runs once before all tests
 * This clears Allure reports and results to ensure clean test reporting
 */
async function globalSetup() {
    console.log('\n🧹 Running Global Setup...\n');

    const allureResultsDir = path.join(process.cwd(), 'allure-results');
    const allureReportDir = path.join(process.cwd(), 'allure-report');

    // Clear allure-results directory
    if (fs.existsSync(allureResultsDir)) {
        console.log('📁 Clearing allure-results directory...');
        fs.rmSync(allureResultsDir, { recursive: true, force: true });
        console.log('✅ allure-results cleared');
    }

    // Clear allure-report directory
    if (fs.existsSync(allureReportDir)) {
        console.log('📁 Clearing allure-report directory...');
        fs.rmSync(allureReportDir, { recursive: true, force: true });
        console.log('✅ allure-report cleared');
    }

    // Recreate directories
    fs.mkdirSync(allureResultsDir, { recursive: true });
    console.log('📂 Created fresh allure-results directory');

    console.log('\n✨ Global Setup Complete!\n');
}

module.exports = globalSetup;
