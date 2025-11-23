import { test, expect } from '../../fixtures/customFixtures.js';
import { HomePage } from '../../pages/HomePage';
import { IntermediateDatePickersPage } from '../../pages/Intermediate/DatePickersPage';
import { getTodayDate, getTodayDateTime } from '../../utils/dateUtils.js';

test.describe('Intermediate - Date Pickers', () => {
  test('Pick and validate date inputs', async ({ page, homePage }) => {
    console.log('📅 Test Execution Time:', new Date().toLocaleString());
    
    const date = new IntermediateDatePickersPage(page);

    const today = getTodayDate();
    const todayTime = getTodayDateTime();

    await test.step('Open Intermediate tab', async () => {
      await homePage.open();
      await homePage.clickTab('Intermediate');
    });

    await test.step('Set today date dynamically', async () => {
      await date.setDateInput(today);
      await expect(date.dateInput).toHaveValue(today);
    });

    await test.step('Set today datetime dynamically', async () => {
      await date.setDateTimeInput(todayTime);
      await expect(date.dateTimeInput).toHaveValue(todayTime);
    });
  });
});
