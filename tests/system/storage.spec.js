import { test, expect } from '../../fixtures/customFixtures.js';
import { HomePage } from '../../pages/HomePage';
import { StoragePage } from '../../pages/System/StoragePage';

test('System - Storage set/clear behavior', async ({ page, homePage }) => {
  
  const storage = new StoragePage(page);

  await homePage.open();
  await homePage.clickTab('System');

  // Set local
  await storage.setLocalStorage();
  await page.waitForTimeout(250);
  const local = await storage.getLocalStorageData();
  expect(local.toLowerCase()).not.toContain('no data');

  // Set session
  await storage.setSessionStorage();
  await page.waitForTimeout(250);
  const session = await storage.getSessionStorageData();
  expect(session.toLowerCase()).not.toContain('no data');

  // Set cookie
  await storage.setCookieData();
  await page.waitForTimeout(250);
  const cookie = await storage.getCookieData();
  expect(cookie.length).toBeGreaterThan(0);

  // Clear and verify cleared state
  await storage.clearAllStorageData();
  await page.waitForTimeout(300);
  expect((await storage.getLocalStorageData()).toLowerCase()).toContain('no data');
  expect((await storage.getSessionStorageData()).toLowerCase()).toContain('no data');
});
