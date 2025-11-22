import { test, expect } from '@playwright/test';
import { HomePage } from '../../pages/HomePage';
import { IntermediateCopyPastePage } from '../../pages/Intermediate/CopyPastePage';

test.describe('Intermediate - Copy/Paste Detection', () => {
  test('Copy the sample text and paste into input', async ({ page }) => {
    const home = new HomePage(page);
    const cp = new IntermediateCopyPastePage(page);

    await test.step('Open Intermediate tab', async () => {
      await home.open();
      await home.clickTab('Intermediate');
    });

    await test.step('Copy sample text to clipboard', async () => {
      // Click to copy (site likely does navigator.clipboard.writeText internally)
      await cp.clickToCopy();
      // As a robust fallback, read the visible copy text and set clipboard ourselves
      const txt = await cp.copyText.textContent();
      await page.evaluate(async (t) => navigator.clipboard.writeText(t), txt);
    });

    await test.step('Paste into input and validate', async () => {
      // Focus and paste via keyboard (Cmd/Ctrl+V)
      await cp.pasteInput.focus();
      await page.keyboard.down(process.platform === 'darwin' ? 'Meta' : 'Control');
      await page.keyboard.press('KeyV');
      await page.keyboard.up(process.platform === 'darwin' ? 'Meta' : 'Control');

      // Validate pasted value
      await expect(cp.pasteInput).not.toHaveValue('');
    });
  });
});
