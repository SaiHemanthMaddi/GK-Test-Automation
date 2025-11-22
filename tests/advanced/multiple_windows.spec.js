import { test, expect } from '@playwright/test';
import { HomePage } from '../../pages/HomePage';
import { MultipleWindowsPage } from '../../pages/Advanced/MultipleWindowsPage';

test.describe('Advanced - Multiple Windows', () => {
  test('Validate window, tab & input-tab popups', async ({ page }) => {
    const home = new HomePage(page);
    const windowsPage = new MultipleWindowsPage(page);

    await home.open();
    await home.clickTab('Advanced');

    // New Window
    await test.step('Open new window', async () => {
      const popup = await windowsPage.openNewWindow();
      await popup.waitForLoadState('domcontentloaded');
      console.log('New window opened');
      await popup.close();
    });

    // New Tab
    await test.step('Open new tab', async () => {
      const popup = await windowsPage.openNewTab();
      await popup.waitForLoadState('domcontentloaded');
      console.log('New tab opened');
      await popup.close();
    });

    // Tab With Input
    await test.step('Open tab with input & validate text', async () => {
      const inputText = 'Playwright Automation';
      const popup = await windowsPage.openTabWithInput(inputText);
      const value = popup.locator('#tab-input');
      console.log('Value inside popup:', value);
      await expect(value).toHaveValue(inputText);
    });
  });
});
