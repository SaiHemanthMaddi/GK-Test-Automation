import { test, expect } from '../../fixtures/customFixtures.js';
import { HomePage } from '../../pages/HomePage';
import { ShadowDomPage } from '../../pages/Advanced/ShadowDomPage';

test.describe('Advanced - Shadow DOM', () => {
  test('Create shadow DOM & validate shadow content', async ({ page, homePage }) => {
    
    const shadow = new ShadowDomPage(page);

    await test.step('Open Advanced tab', async () => {
      await homePage.open();
      await homePage.clickTab('Advanced');
    });

    await test.step('Create shadow DOM', async () => {
      await shadow.createShadowDom();
      console.log('Shadow DOM created');
    });

    await test.step('Validate shadow content text', async () => {
      const txt = await shadow.getShadowText();
      console.log(`Shadow text: ${txt}`);
      expect(txt).toContain('Shadow');
    });
  });
});
