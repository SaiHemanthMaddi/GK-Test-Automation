import { test, expect } from '../../fixtures/customFixtures.js';

test.describe('@basic Checkboxes', () => {
  test('Toggle all checkbox options', async ({ homePage, checkboxPage }) => {
    await test.step('Open Basic tab', async () => {
      await homePage.open();
      await homePage.clickTab('Basic');
    });

    await test.step('Toggle all options', async () => {
      await checkboxPage.toggleNewsletter();
      await checkboxPage.toggleTerms();
      await checkboxPage.toggleNotifications();
    });

    await test.step('Validate states', async () => {
      await expect(checkboxPage.newsletter).toHaveAttribute('data-state', 'checked');
      await expect(checkboxPage.terms).toHaveAttribute('data-state', 'checked');
      await expect(checkboxPage.notifications).toHaveAttribute('data-state', 'checked');
    });
  });
});
