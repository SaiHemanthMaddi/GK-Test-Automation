import { test, expect } from '@playwright/test';
import { HomePage } from '../../pages/HomePage';
import { IntermediateProgressPage } from '../../pages/Intermediate/ProgressPage';

test.describe('Intermediate - Progress & Loading', () => {
  test('Validate progress and loading button state', async ({ page }) => {
    const home = new HomePage(page);
    const pr = new IntermediateProgressPage(page);

    await test.step('Open Intermediate tab', async () => {
      await home.open();
      await home.clickTab('Intermediate');
    });

    await test.step('Validate progress elements visible', async () => {
      await expect(pr.linear).toBeVisible();
      await expect(pr.dynamic).toBeVisible();
    });

    await test.step('Loading button is disabled', async () => {
      await expect(pr.loadingButton).toBeDisabled();
    });
  });
});
