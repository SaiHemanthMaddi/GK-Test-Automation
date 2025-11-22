import { test, expect } from '@playwright/test';
import { HomePage } from '../../pages/HomePage';
import { BasicRadioPage } from '../../pages/basic/RadioPage';

test.describe('@basic Radio Buttons', () => {
  test('Select gender option', async ({ page }) => {
    const home = new HomePage(page);
    const radio = new BasicRadioPage(page);

    await test.step('Open Basic tab', async () => {
      await home.open();
      await home.clickTab('Basic');
    });

    await test.step('Select Male', async () => {
      await radio.selectGender('male');
    });

    await test.step('Validate selection', async () => {
      await expect(radio.male).toHaveAttribute('data-state', 'checked');
    });
  });
});
