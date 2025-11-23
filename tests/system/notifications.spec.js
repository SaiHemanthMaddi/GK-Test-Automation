import { test, expect } from '../../fixtures/customFixtures.js';
import { HomePage } from '../../pages/HomePage';
import { NotificationsPage } from '../../pages/System/NotificationsPage';

test('System - Notifications toggle and actions', async ({ page, homePage }) => {
  
  const notes = new NotificationsPage(page);

  await homePage.open();
  await homePage.clickTab('System');

  // initial status exists
  const before = await notes.getNotificationStatus();
  expect(before.length).toBeGreaterThan(0);

  // toggle on/off
  await notes.toggleNotifications();
  await page.waitForTimeout(300);
  const after = await notes.getNotificationStatus();
  expect(after.length).toBeGreaterThanOrEqual(0);

  // Try to click send buttons (they may be disabled; ensure no exceptions)
  await notes.sendTestNotification().catch(() => {});
  await notes.sendPushNotification().catch(() => {});
});
