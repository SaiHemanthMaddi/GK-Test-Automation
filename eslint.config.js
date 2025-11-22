const playwright = require('eslint-plugin-playwright');

module.exports = [
  {
    ...playwright.configs['flat/recommended'],
    files: ['tests/**'],
  },
  {
    files: ['**/*.js'],
    languageOptions: {
      sourceType: 'module',
      ecmaVersion: 'latest',
    },
    rules: {
      'no-console': 'warn',
    },
  },
  {
    ignores: ['allure-report/', 'allure-results/', 'test-results/', 'node_modules/'],
  },
];
