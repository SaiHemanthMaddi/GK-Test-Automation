import { test, expect } from '@playwright/test';
import { HomePage } from '../../pages/HomePage';
import { BasicTextInputsPage } from '../../pages/basic/TextInputsPage';

test.describe('@basic Text Inputs', () => {
  test('Fill and validate text inputs', async ({ page }) => {
    const home = new HomePage(page);
    const inputs = new BasicTextInputsPage(page);

    await test.step('Open Basic tab', async () => {
      await home.open();
      await home.clickTab('Basic');
    });

    await test.step('Fill text fields', async () => {
      await inputs.fillAllFields({
        firstName: 'Sai',
        lastName: 'Maddi',
        email: 'sai@test.com',
        bio: 'Automation tester',
      });
    });

    await test.step('Validate inputs', async () => {
      await expect(inputs.firstName).toHaveValue('Sai');
      await expect(inputs.lastName).toHaveValue('Maddi');
      await expect(inputs.email).toHaveValue('sai@test.com');
      await expect(inputs.bio).toHaveValue('Automation tester');
    });
  });
});
