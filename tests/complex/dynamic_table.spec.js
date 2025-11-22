import { test, expect } from '@playwright/test';
import { HomePage } from '../../pages/HomePage';
import { DynamicTablePage } from '../../pages/Complex/DynamicTablePage';

test('Edit AND delete first row successfully', async ({ page }) => {
  const home = new HomePage(page);
  const table = new DynamicTablePage(page);

  await home.open();
  await home.clickTab('Complex');

  await table.editFirstRow('Updated A', '555');

  const existsBefore = await table.rowExists(1);
  expect(existsBefore).toBe(1);

  await table.deleteFirstRow();

  const existsAfter = await table.rowExists(1);
  expect(existsAfter).toBe(0);
});
