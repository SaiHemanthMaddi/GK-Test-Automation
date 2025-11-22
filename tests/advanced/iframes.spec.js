import { test, expect } from '@playwright/test';
import { HomePage } from '../../pages/HomePage';
import { IFramesPage } from '../../pages/Advanced/IFramesPage';

test.describe('Advanced - IFrames', () => {
  test('Validate single & nested iframe interactions', async ({ page }) => {
    const home = new HomePage(page);
    const frame = new IFramesPage(page);

    await test.step('Open Advanced tab', async () => {
      await home.open();
      await home.clickTab('Advanced');
    });

    await test.step('Validate single iframe content & click button', async () => {
      const text = await frame.getSingleIframeText();
      console.log(`Single iframe text: ${text}`);
      expect(text).toContain('content inside an iframe');

      await frame.clickButtonInsideSingleIframe();
    });

    await test.step('Validate nested iframe content', async () => {
      const nested = await frame.getNestedIframeText();
      console.log(`Nested iframe text: ${nested}`);
      expect(nested).toContain('Nested Content');
    });
  });
});
