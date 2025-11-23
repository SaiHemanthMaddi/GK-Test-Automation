import { test, expect } from '../../fixtures/customFixtures.js';

test.describe('@basic Radio Buttons', () => {
  test('Select gender option', async ({ homePage, radioPage }) => {
    await test.step('Open Basic tab', async () => {
      await homePage.open();
      await homePage.clickTab('Basic');
    });

    await test.step('Select Male', async () => {
      await radioPage.selectGender('male');
    });

    await test.step('Validate selection', async () => {
      await expect(radioPage.male).toHaveAttribute('data-state', 'checked');
    });
  });
});
