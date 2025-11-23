import { test, expect } from '../../fixtures/customFixtures.js';
import { HomePage } from '../../pages/HomePage';
import { RaceConditionPage } from '../../pages/Buggy/RaceConditionPage';

test.describe('Buggy Feature - Race Condition', () => {
  test('Handle fast-changing button text', async ({ page, homePage }) => {
    
    const race = new RaceConditionPage(page);

    await homePage.open();
    await homePage.clickTab('Buggy');

    await race.clickRaceButton();
    await race.validateRaceConditionInfo();

    console.log('✔ Race Condition scenario validated');
  });
});
