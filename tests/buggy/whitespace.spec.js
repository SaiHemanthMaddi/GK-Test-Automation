import { test } from '@playwright/test';
import { HomePage } from '../../pages/HomePage';
import { WhitespaceTextPage } from '../../pages/Buggy/WhitespaceTextPage';

test('Buggy - Normalize extra whitespace text', async ({ page }) => {
  const home = new HomePage(page);
  const ws = new WhitespaceTextPage(page);

  await home.open();
  await home.clickTab('Buggy');

  // Expected after trimming + collapsing spaces
  const expectedText = 'This text has extra whitespace and line breaks';

  await ws.validateNormalized(expectedText);
});
