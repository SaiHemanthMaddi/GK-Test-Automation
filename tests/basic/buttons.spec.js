import { test, expect } from '../../fixtures/customFixtures.js';

test.describe('@basic Buttons', () => {
  test('Click all enabled buttons', async ({ homePage, buttonsPage }) => {
    await test.step('Open Basic tab', async () => {
      await homePage.open();
      await homePage.clickTab('Basic');
    });

    await test.step('Click buttons except disabled', async () => {
      await buttonsPage.enabled.click();
      await buttonsPage.secondary.click();
      await buttonsPage.outline.click();
      await buttonsPage.destructive.click();
      await buttonsPage.ghost?.click(); // optional if exists
      await buttonsPage.dynamic.click();
    });

    await test.step('Validate disabled button', async () => {
      await expect(buttonsPage.disabled).toBeDisabled();
    });
  });
});
