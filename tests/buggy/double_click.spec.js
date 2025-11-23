import { test, expect } from '../../fixtures/customFixtures.js';

test('Buggy - Counter increments on single click (even though UI says double)', async ({
  homePage,
  doubleClickPage,
}) => {

  await homePage.open();
  await homePage.clickTab('Buggy');

  const before = await doubleClickPage.beforeClickCount();
  console.log('Before:', before);

  await doubleClickPage.clikTwiceBtn();

  const after = await doubleClickPage.afterClickCount();
  console.log('After:', after);
});
