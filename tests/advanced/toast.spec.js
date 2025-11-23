import { test, expect } from '../../fixtures/customFixtures.js';
import { HomePage } from '../../pages/HomePage';
import { ToastPage } from '../../pages/Advanced/ToastPage';

test.describe('Advanced - Toast Notifications', () => {
  test('Click all toast buttons (no actual toasts visible on UI)', async ({ page, homePage }) => {
    
    const toast = new ToastPage(page);

    await homePage.open();
    await homePage.clickTab('Advanced');

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
