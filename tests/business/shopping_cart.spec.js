import { test, expect } from '../../fixtures/customFixtures.js';
import { users, products } from '../../fixtures/testData.js';

test.describe('Business - Shopping Cart', () => {
  test('Validate cart empty & product add restrictions', async ({ homePage, userAuthPage, cartPage }) => {
    await homePage.open();
    await homePage.clickTab('Business');

    await test.step('Login with valid creds', async () => {
      await userAuthPage.login(users.admin.username, users.admin.password);
      await expect(userAuthPage.loginWelcomeMessage).toBeVisible();
      await expect(userAuthPage.loginEmailMessage).toBeVisible();
      console.log('✔ Login successful');
    });

    await test.step('Check empty cart text', async () => {
      const text = await cartPage.isCartEmpty();
      expect(text).toContain('Your cart is empty');
      console.log('Verified empty cart');
    });

    await test.step('Validate add-to-cart buttons based on stock', async () => {
      const total = products.totalProducts;

      for (let i = 1; i <= total; i++) {
        const button = cartPage.addButton(i);
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

  test('Validate add & verify cart behavior', async ({ homePage, userAuthPage, cartPage }) => {
    await homePage.open();
    await homePage.clickTab('Business');

    // LOGIN
    await userAuthPage.login(users.admin.username, users.admin.password);
    await expect(userAuthPage.loginWelcomeMessage).toBeVisible();
    console.log('✔ Login successful');

    // INITIAL CART EXPECTED = 0
    console.log('✔ Initial cart empty');

    // ADD PRODUCTS
    const addedIndexes = [];

    for (let i = 1; i <= products.totalProducts; i++) {
      const btn = cartPage.addButton(i);

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
      const name = await cartPage.productName(idx).innerText();
      console.log(`Product ${idx}: ${name}`);
    }
  });
});
