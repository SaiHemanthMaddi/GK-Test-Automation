// tests/buggy/case_sensitivity.spec.js
import { test } from '../../fixtures/customFixtures.js';

test('Buggy - Validate case-insensitive action attributes', async ({ homePage, caseSensitivityPage }) => {

  await homePage.open();
  await homePage.clickTab('Buggy');

  const expectedActions = ['submit', 'cancel', 'delete'];
  await caseSensitivityPage.validateActions(expectedActions);
});
