import { test, expect } from '../../fixtures/customFixtures.js';
import { HomePage } from '../../pages/HomePage';
import { DynamicIdsPage } from '../../pages/Advanced/DynamicIdsPage';

test.describe('Advanced - Dynamic IDs', () => {
  test('Validate dynamic ID regeneration & dynamic classes', async ({ page, homePage }) => {
    
    const dyn = new DynamicIdsPage(page);

    await test.step('Open Advanced tab', async () => {
      await homePage.open();
      await homePage.clickTab('Advanced');
    });

    await test.step('Capture current dynamic ID', async () => {
      const id = await dyn.getCurrentDynamicId();
      console.log(`Old ID: ${id}`);
    });

    await test.step('Regenerate ID', async () => {
      await dyn.regenerateId();
      const newId = await dyn.getCurrentDynamicId();
      console.log(`New ID: ${newId}`);
      expect(newId).not.toBeNull();
    });

    await test.step('Validate dynamic class element', async () => {
      const cls = await dyn.getDynamicClassName();
      console.log(`Dynamic class: ${cls}`);
      expect(cls).toContain('bg-');
    });
  });
});
