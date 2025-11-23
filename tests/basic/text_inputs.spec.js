import { test, expect } from '../../fixtures/customFixtures.js';
import { formData } from '../../fixtures/testData.js';

test.describe('@basic Text Inputs', () => {
  test('Fill and validate text inputs', async ({ homePage, textInputsPage }) => {
    await test.step('Open Basic tab', async () => {
      await homePage.open();
      await homePage.clickTab('Basic');
    });

    await test.step('Fill text fields', async () => {
      await textInputsPage.fillAllFields(formData.textInputs);
    });

    await test.step('Validate inputs', async () => {
      await expect(textInputsPage.firstName).toHaveValue(formData.textInputs.firstName);
      await expect(textInputsPage.lastName).toHaveValue(formData.textInputs.lastName);
      await expect(textInputsPage.email).toHaveValue(formData.textInputs.email);
      await expect(textInputsPage.bio).toHaveValue(formData.textInputs.bio);
    });
  });
});
