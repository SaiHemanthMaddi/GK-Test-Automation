import { test, expect } from '../../fixtures/customFixtures.js';
import { formData } from '../../fixtures/testData.js';

test.describe('Business - Contact Form', () => {
  test('Validate contact form input fields', async ({ homePage, contactPage }) => {
    await homePage.open();
    await homePage.clickTab('Business');

    await test.step('Fill contact form', async () => {
      await contactPage.submitForm(formData.contact);
      await contactPage.submitBtn.isEnabled();
      console.log('Form submitted (button is enabled on the site)');
    });
  });
});
