import { test, expect } from '@playwright/test';
import { HomePage } from '../../pages/HomePage';
import { DelayedLoadingPage } from '../../pages/Buggy/DelayedLoadingPage';

test.describe('Buggy Feature - Delayed Loading', () => {
  test('Handle element appearing after delay', async ({ page }) => {
    const home = new HomePage(page);
    const delayed = new DelayedLoadingPage(page);

    await home.open();
    await home.clickTab('Buggy');

    await delayed.waitForDelayedElement();
    await delayed.validateDelayedElementLoaded();
    await delayed.validateInfoText();

    console.log('✔ Delayed Loading scenario validated');
  });
});
