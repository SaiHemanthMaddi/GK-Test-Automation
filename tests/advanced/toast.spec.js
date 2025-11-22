import { test, expect } from '@playwright/test';
import { HomePage } from '../../pages/HomePage';
import { ToastPage } from '../../pages/Advanced/ToastPage';

test.describe('Advanced - Toast Notifications', () => {
  test('Click all toast buttons (no actual toasts visible on UI)', async ({ page }) => {
    const home = new HomePage(page);
    const toast = new ToastPage(page);

    await home.open();
    await home.clickTab('Advanced');

    const types = ['success', 'error', 'info', 'warning'];

    for (const type of types) {
      await test.step(`Click ${type} toast button`, async () => {
        await toast.triggerToast(type);
        console.log(`${type.toUpperCase()} toast button clicked`);

        // Just verify button exists & was clickable
        await expect(toast.getButton(type)).toBeVisible();
      });
    }
  });
});
