import { test, expect } from '../../fixtures/customFixtures.js';
import { HomePage } from '../../pages/HomePage';
import { DelayedLoadingPage } from '../../pages/Buggy/DelayedLoadingPage';

test.describe('Buggy Feature - Delayed Loading', () => {
  test('Handle element appearing after delay', async ({ page, homePage }) => {
    
    const delayed = new DelayedLoadingPage(page);

    await homePage.open();
    await homePage.clickTab('Buggy');

    await delayed.waitForDelayedElement();
    await delayed.validateDelayedElementLoaded();
    await delayed.validateInfoText();

    console.log('✔ Delayed Loading scenario validated');
  });
});
