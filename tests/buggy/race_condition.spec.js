import { test, expect } from '@playwright/test';
import { HomePage } from '../../pages/HomePage';
import { RaceConditionPage } from '../../pages/Buggy/RaceConditionPage';

test.describe('Buggy Feature - Race Condition', () => {
  test('Handle fast-changing button text', async ({ page }) => {
    const home = new HomePage(page);
    const race = new RaceConditionPage(page);

    await home.open();
    await home.clickTab('Buggy');

    await race.clickRaceButton();
    await race.validateRaceConditionInfo();

    console.log('✔ Race Condition scenario validated');
  });
});
