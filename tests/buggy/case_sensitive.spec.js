// tests/buggy/case_sensitivity.spec.js
import { test } from '@playwright/test';
import { HomePage } from '../../pages/HomePage';
import { CaseSensitivityPage } from '../../pages/Buggy/CaseSensitivityPage';

test('Buggy - Validate case-insensitive action attributes', async ({ page }) => {
  const home = new HomePage(page);
  const cs = new CaseSensitivityPage(page);

  await home.open();
  await home.clickTab('Buggy');

  const expectedActions = ['submit', 'cancel', 'delete'];
  await cs.validateActions(expectedActions);
});
