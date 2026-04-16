const { defineConfig } = require('@playwright/test');
const { createAzurePlaywrightConfig, ServiceOS } = require('@azure/playwright');
const { DefaultAzureCredential } = require('@azure/identity');
const config = require('./playwright.config.js');

const serviceUrl = process.env.PLAYWRIGHT_SERVICE_URL;
const enableAzureReporter = process.env.PLAYWRIGHT_ENABLE_REPORTING === 'true';

module.exports = serviceUrl
  ? defineConfig(
      config,
      createAzurePlaywrightConfig(config, {
        exposeNetwork: '<loopback>',
        connectTimeout: 3 * 60 * 1000,
        os: ServiceOS.LINUX,
        credential: new DefaultAzureCredential(),
      }),
      {
        reporter: enableAzureReporter
          ? [
              ['html', { open: 'never' }],
              ['list'],
              ['allure-playwright'],
              ['@azure/playwright/reporter'],
            ]
          : [['html', { open: 'never' }], ['list'], ['allure-playwright']],
      }
    )
  : defineConfig(config);
