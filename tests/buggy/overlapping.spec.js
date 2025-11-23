import { test } from '../../fixtures/customFixtures.js';

test.describe('Buggy Feature - Overlapping Elements', () => {
  test('Handle overlay blocking element click', async ({ homePage, overlappingElementsPage }) => {

    await homePage.open();
    await homePage.clickTab('Buggy');

    await overlappingElementsPage.clickOverlayButton();
    await overlappingElementsPage.validateOverlayGone();
    await overlappingElementsPage.validateSuccessAlert();

    console.log('✔ Overlapping Element scenario handled successfully');
  });
});
