# ChatGPT GK Test Automation

This project contains automated tests for the ChatGPT GK application using Playwright.

## Prerequisites

- Node.js (v14 or higher)
- npm

## Setup

1. Clone the repository.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Install Playwright browsers:
   ```bash
   npx playwright install
   ```

## Running Tests

### Run all tests

```bash
npx playwright test
```

### Run specific tests

```bash
npx playwright test tests/advanced
```

### Run with Allure Report

```bash
npm run test:allure
npm run allure:generate
npm run allure:open
```

## Code Quality

### Linting

```bash
npm run lint
```

### Formatting

```bash
npm run format
```

## Project Structure

- `tests/`: Contains test specifications organized by category.
- `pages/`: Page Object Models.
- `playwright.config.js`: Playwright configuration.
