import { test, expect } from '@playwright/test';
import { HomePage } from '../../pages/HomePage';
import { ContactPage } from '../../pages/Business/ContactPage';

test.describe('Business - Contact Form', () => {
  test('Validate contact form input fields', async ({ page }) => {
    const home = new HomePage(page);
    const contact = new ContactPage(page);

    await home.open();
    await home.clickTab('Business');

    await test.step('Fill contact form', async () => {
      await contact.submitForm({
        name: 'Sai Hemanth',
        email: 'sai@test.com',
        subject: 'Support',
        message: 'This is a test inquiry.',
      });
      await contact.submitBtn.isEnabled();
      console.log('Form submitted (button is enabled on the site)');
    });
  });
});
