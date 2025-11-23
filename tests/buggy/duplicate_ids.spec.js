import { test, expect } from '../../fixtures/customFixtures.js';
import { HomePage } from '../../pages/HomePage';
import { DuplicateIdsPage } from '../../pages/Buggy/DuplicateIdsPage';

test('Buggy - Should type into hidden input using force', async ({ page, homePage }) => {
  
  const dup = new DuplicateIdsPage(page);

  await homePage.open();
  await homePage.clickTab('Buggy');

  await expect(dup.topDisplay).toBeVisible();
  await dup.fillFirstInput('Sai');
  await dup.fillSecondInput('Hemanth');

  const firstVal = await dup.getFirstInputValue();
  const secondVal = await dup.getSecondInputValue();

  console.log('First Input:', firstVal);
  console.log('Second Input:', secondVal);

  expect(firstVal).toBe('Sai');
  expect(secondVal).toBe('Hemanth');
  await expect(dup.downDisplay).toBeVisible();
});
