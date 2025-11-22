import { test, expect } from '@playwright/test';
import { HomePage } from '../../pages/HomePage';
import { DynamicIdsPage } from '../../pages/Buggy/DynamicIdsPage';

test.describe('Buggy - Dynamic IDs', () => {
  test('Replace username and verify input value', async ({ page }) => {
    const home = new HomePage(page);
    const dynamic = new DynamicIdsPage(page);

    await home.open();
    await home.clickTab('Buggy');

    await test.step('Ensure Dynamic IDs card is present', async () => {
      await expect(dynamic.usernameInput).toBeVisible();
    });

    const newName = 'sai_test_user_123';

    await test.step('Replace the username via select-all + delete then type', async () => {
      await dynamic.replaceUsername(newName);
    });

    await test.step('Validate that the input contains the expected value', async () => {
      const value = await dynamic.getUsernameValue();
      expect(value).toBe(newName);
    });

    await test.step('Log current ID shown in the UI (for debugging)', async () => {
      const currentId = await dynamic.getCurrentIdText();
      console.log('Current ID shown on page:', currentId);
    });
  });
});
