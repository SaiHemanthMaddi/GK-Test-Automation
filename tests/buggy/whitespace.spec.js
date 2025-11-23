import { test } from '../../fixtures/customFixtures.js';

test('Buggy - Normalize extra whitespace text', async ({ homePage, whitespaceTextPage }) => {

  await homePage.open();
  await homePage.clickTab('Buggy');

  // Expected after trimming + collapsing spaces
  const expectedText = 'This text has extra whitespace and line breaks';

  await whitespaceTextPage.validateNormalized(expectedText);
});
