import { test, expect } from '@playwright/test';
import { HomePage } from '../../pages/HomePage';
import { BuggyStaleElementPage } from '../../pages/Buggy/StaleReferencePage.js';

test.describe('Buggy – Stale Element Reference', () => {
  test('should handle element detachment properly', async ({ page }) => {
    const home = new HomePage(page);
    const stalePage = new BuggyStaleElementPage(page);

    await home.open();
    await home.clickTab('Buggy');

    await stalePage.typeInField('Hello automation');
    await stalePage.submitAndHandleDetachment();

    console.log('✔ Stale element handled successfully');
  });
});
