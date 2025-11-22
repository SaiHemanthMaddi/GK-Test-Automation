import { test, expect } from '@playwright/test';
import { HomePage } from '../../pages/HomePage';
import { ProductsPage } from '../../pages/Business/ProductsPage';

test.describe('Business - Product Search, Filter, Sorting, Validation Suite', () => {
  test('Complete Product Validation', async ({ page }, testInfo) => {
    const home = new HomePage(page);
    const products = new ProductsPage(page);

    await home.open();
    await home.clickTab('Business');

    await test.step('Search full keyword', async () => {
      await products.searchProduct('API');

      const names = await products.getAllProductNames();
      expect(names.length).toBeGreaterThan(0);

      for (const n of names) {
        expect(n.toLowerCase()).toContain('api');
      }

      await testInfo.attach('full-search-results', {
        body: Buffer.from(JSON.stringify(names, null, 2)),
        contentType: 'application/json',
      });
    });

    await test.step('Search partial keyword', async () => {
      await products.searchProduct('ap');

      const names = await products.getAllProductNames();
      expect(names.length).toBeGreaterThan(0);

      for (const n of names) {
        expect(n.toLowerCase()).toContain('ap');
      }

      await testInfo.attach('partial-search-screenshot', {
        body: await page.screenshot(),
        contentType: 'image/png',
      });
    });

    await products.search.fill('');
    await page.waitForTimeout(400);

    await expect(products.categoryFilter).toBeVisible();
    await expect(products.sortSelect).toBeVisible();

    await test.step('Validate stock labels', async () => {
      const stock = await products.getAllProductStockStatus();

      for (const s of stock) {
        expect(['In Stock', 'Out of Stock']).toContain(s.trim());
      }

      await testInfo.attach('stock-status', {
        body: Buffer.from(JSON.stringify(stock, null, 2)),
        contentType: 'application/json',
      });
    });

    await test.step('Validate price formatting', async () => {
      const prices = await products.productPrices.allInnerTexts();

      for (const price of prices) {
        expect(await products.isPriceFormatValid(price.trim())).toBeTruthy();
      }

      await testInfo.attach('price-format-results', {
        body: Buffer.from(JSON.stringify(prices, null, 2)),
        contentType: 'application/json',
      });
    });
  });
});
