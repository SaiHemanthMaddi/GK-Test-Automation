import { test, expect } from '../fixtures/customFixtures.js';

test.describe('@regression Home Page – Tab Navigation Suite', () => {
  test('@smoke Validate homepage load and tab interactions', async ({ page, homePage }) => {


    // STEP 1 — Open homepage
    await test.step('Open homepage', async () => {
      await homePage.open();
      await expect(page).toHaveTitle(/Test Automation Practice Hub/);
    });

    // STEP 2 — Check all tabs are visible
    await test.step('Verify all tabs rendered & visible', async () => {
      const tabs = [
        'Overview',
        'Basic',
        'Intermediate',
        'Advanced',
        'Business',
        'System',
        'Complex',
        'Buggy',
      ];

      for (const tabName of tabs) {
        const tab = page.getByRole('tab', { name: tabName });
        await expect(tab).toBeVisible();
      }
    });

    // STEP 3 — Click each tab and verify content panel
    await test.step('Click each tab & verify content loads', async () => {
      const tabsToCheck = [
        'Overview',
        'Basic',
        'Intermediate',
        'Advanced',
        'Business',
        'System',
        'Complex',
        'Buggy',
      ];

      for (const tabName of tabsToCheck) {
        await test.step(`Activate tab → ${tabName}`, async () => {
          await homePage.clickTab(tabName);

          // Verify tab panel visible
          const panel = page.getByRole('tabpanel');
          await expect(panel).toBeVisible();

          // Validate active tab state
          const tab = page.getByRole('tab', { name: tabName });
          await expect(tab).toHaveAttribute('data-state', 'active');
        });
      }
    });
  });
});
