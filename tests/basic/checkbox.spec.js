import { test, expect } from '@playwright/test';
import { HomePage } from '../../pages/HomePage.js';
import { BasicCheckboxPage } from '../../pages/basic/CheckboxPage.js';

test.describe('@basic Checkboxes', () => {
  test('Toggle all checkbox options', async ({ page }) => {
    const home = new HomePage(page);
    const box = new BasicCheckboxPage(page);

    await test.step('Open Basic tab', async () => {
      await home.open();
      await home.clickTab('Basic');
    });

    await test.step('Toggle all options', async () => {
      await box.toggleNewsletter();
      await box.toggleTerms();
      await box.toggleNotifications();
    });

    await test.step('Validate states', async () => {
      await expect(box.newsletter).toHaveAttribute('data-state', 'checked');
      await expect(box.terms).toHaveAttribute('data-state', 'checked');
      await expect(box.notifications).toHaveAttribute('data-state', 'checked');
    });
  });
});
