import { test, expect } from '../../fixtures/customFixtures.js';
import { HomePage } from '../../pages/HomePage';
import { BuggyStaleElementPage } from '../../pages/Buggy/StaleReferencePage.js';

test.describe('Buggy – Stale Element Reference', () => {
  test('should handle element detachment properly', async ({ page, homePage }) => {
    
    const stalePage = new BuggyStaleElementPage(page);

    await homePage.open();
    await homePage.clickTab('Buggy');

    await stalePage.typeInField('Hello automation');
    await stalePage.submitAndHandleDetachment();

    console.log('✔ Stale element handled successfully');
  });
});
