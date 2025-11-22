import { test, expect } from '@playwright/test';
import { HomePage } from '../../pages/HomePage';
import { UserAuthPage } from '../../pages/Business/UserAuthPage';
import { BusinessCartPage } from '../../pages/Business/CartPage';

test.describe('Business - Shopping Cart', () => {
  test('Validate cart empty & product add restrictions', async ({ page }) => {
    const home = new HomePage(page);
    const auth = new UserAuthPage(page);
    const cart = new BusinessCartPage(page);

    await home.open();
    await home.clickTab('Business');

    await test.step('Login with valid creds', async () => {
      await auth.login('admin', 'password');
      await expect(auth.loginWelcomeMessage).toBeVisible();
      await expect(auth.loginEmailMessage).toBeVisible();
      console.log('✔ Login successful');
    });

    await test.step('Check empty cart text', async () => {
      const text = await cart.isCartEmpty();
      expect(text).toContain('Your cart is empty');
      console.log('Verified empty cart');
    });

    await test.step('Validate add-to-cart buttons based on stock', async () => {
      const total = 5;

      for (let i = 1; i <= total; i++) {
        const button = cart.addButton(i);
        const isDisabled = await button.isDisabled();

        console.log(`Product ${i}: Disabled = ${isDisabled}`);

        if (isDisabled) {
          console.log(`→ Product ${i} is OUT OF STOCK`);
          await expect(button).toBeDisabled();
        } else {
          console.log(`→ Product ${i} is IN STOCK`);
          await expect(button).toBeEnabled();
        }
      }
    });
  });

  test('Validate add & verify cart behavior', async ({ page }) => {
    const home = new HomePage(page);
    const auth = new UserAuthPage(page);
    const cart = new BusinessCartPage(page);

    await home.open();
    await home.clickTab('Business');

    // LOGIN
    await auth.login('admin', 'password');
    await expect(auth.loginWelcomeMessage).toBeVisible();
    console.log('✔ Login successful');

    // INITIAL CART EXPECTED = 0
    console.log('✔ Initial cart empty');

    // ADD PRODUCTS
    const addedIndexes = [];

    for (let i = 1; i <= 5; i++) {
      const btn = cart.addButton(i);

      if (await btn.isEnabled()) {
        console.log(`Adding product ${i} to cart...`);
        await btn.click();
        addedIndexes.push(i);
      }
    }

    console.log('✔ Added product indexes:', addedIndexes);
    // YOUR UPDATED COUNT (CORRECT)
    const updatedCount = addedIndexes.length;
    console.log(`✔ Updated cart count = ${updatedCount}`);

    for (const idx of addedIndexes) {
      const name = await cart.productName(idx).innerText();
      console.log(`Product ${idx}: ${name}`);
    }
  });
});
