import { test } from '../../fixtures/customFixtures.js';

test('Buggy - Element outside viewport should be scrolled into view', async ({ homePage, outsideViewportPage }) => {

  await homePage.open();
  await homePage.clickTab('Buggy');

  await outsideViewportPage.scrollToButton();
  await outsideViewportPage.validateButtonVisible();

  await outsideViewportPage.clickButton();
});
