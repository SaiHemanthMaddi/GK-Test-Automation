# GK Test Automation Framework

This project contains a robust automated testing framework for the GK application, built using [Playwright](https://playwright.dev/). It supports comprehensive UI and API testing with detailed reporting via Allure.

## 📋 Prerequisites

Ensure you have the following installed on your machine:

-   **Node.js** (v14 or higher)
-   **npm** (Node Package Manager)

## 🚀 Setup

1.  **Clone the repository:**
    ```bash
    git clone <repository-url>
    cd gk
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Install Playwright browsers:**
    ```bash
    npx playwright install
    ```

## 📂 Project Structure

The project is organized as follows:

-   `tests/`: Contains test specifications (e.g., `tests/advanced`, `tests/buggy`).
-   `pages/`: Page Object Models (POM) for encapsulating page interactions.
-   `fixtures/`: Test fixtures and global setup configurations (`globalSetup.js`).
-   `utils/`: Utility functions and helpers.
-   `playwright.config.js`: Main Playwright configuration file.
-   `package.json`: Project dependencies and scripts.

## 🏃‍♂️ Running Tests

### Run All Tests
Execute all tests in the `tests/` directory:
```bash
npx playwright test
```

### Run Specific Tests
Run tests in a specific directory or file:
```bash
npx playwright test tests/advanced
```

### Run with Allure Report
To run tests and generate a comprehensive Allure report:

1.  **Run tests with Allure reporter:**
    ```bash
    npm run test:allure
    ```
2.  **Generate and open the report:**
    ```bash
    npm run allure:generate
    npm run allure:open
    ```

**One-liner to refresh reports:**
```bash
npm run allure:refresh
```

## 🛠️ Code Quality

### Linting
Check for code quality issues:
```bash
npm run lint
```

### Formatting
Format code using Prettier:
```bash
npm run format
```

## ⚙️ Configuration

The `playwright.config.js` file handles the test configuration:
-   **Browsers**: Chromium, Firefox, WebKit.
-   **Parallelism**: Fully parallel execution enabled.
-   **CI/CD**: Optimized settings for CI environments (retries, workers).
-   **Reporters**: List and Allure reporters configured.
