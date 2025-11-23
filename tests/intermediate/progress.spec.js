import { test, expect } from '../../fixtures/customFixtures.js';
import { HomePage } from '../../pages/HomePage';
import { IntermediateProgressPage } from '../../pages/Intermediate/ProgressPage';

test.describe('Intermediate - Progress & Loading', () => {
  test('Validate progress and loading button state', async ({ page, homePage }) => {
    
    const pr = new IntermediateProgressPage(page);

    await test.step('Open Intermediate tab', async () => {
      await homePage.open();
      await homePage.clickTab('Intermediate');
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
