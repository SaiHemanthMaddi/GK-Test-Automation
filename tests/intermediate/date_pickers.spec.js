import { test, expect } from '@playwright/test';
import { HomePage } from '../../pages/HomePage';
import { IntermediateDatePickersPage } from '../../pages/Intermediate/DatePickersPage';
import { getTodayDate, getTodayDateTime } from '../../utils/dateUtils.js';

test.describe('Intermediate - Date Pickers', () => {
  test('Pick and validate date inputs', async ({ page }) => {
    console.log('📅 Test Execution Time:', new Date().toLocaleString());
    const home = new HomePage(page);
    const date = new IntermediateDatePickersPage(page);

    const today = getTodayDate();
    const todayTime = getTodayDateTime();

    await test.step('Open Intermediate tab', async () => {
      await home.open();
      await home.clickTab('Intermediate');
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
