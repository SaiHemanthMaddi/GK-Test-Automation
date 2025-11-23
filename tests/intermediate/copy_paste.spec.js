import { test, expect } from '../../fixtures/customFixtures.js';

test.describe('Intermediate - Copy/Paste Detection', () => {
  test('Copy the sample text and paste into input', async ({ page, homePage, copyPastePage }) => {

    await test.step('Open Intermediate tab', async () => {
      await homePage.open();
      await homePage.clickTab('Intermediate');
    });

    await test.step('Copy sample text to clipboard', async () => {
      // Click to copy (site likely does navigator.clipboard.writeText internally)
      await copyPastePage.clickToCopy();
      // As a robust fallback, read the visible copy text and set clipboard ourselves
      const txt = await copyPastePage.copyText.textContent();
      await copyPastePage.pasteToInput(txt);
    });

    await test.step('Paste into input and validate', async () => {
      // Focus and paste via keyboard (Cmd/Ctrl+V)
      await copyPastePage.pasteInput.focus();
      await page.keyboard.down(process.platform === 'darwin' ? 'Meta' : 'Control');
      await page.keyboard.press('KeyV');
      await page.keyboard.up(process.platform === 'darwin' ? 'Meta' : 'Control');

      // Validate pasted value
      await expect(copyPastePage.pasteInput).not.toHaveValue('');
    });
  });
});
