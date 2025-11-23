import { test, expect } from '../../fixtures/customFixtures.js';
import { HomePage } from '../../pages/HomePage';
import { InfiniteScrollPage } from '../../pages/Advanced/InfiniteScrollPage';

test.describe('Advanced - Infinite Scroll', () => {
  test('Scroll updates visible item count', async ({ page, homePage }) => {
    
    const scroll = new InfiniteScrollPage(page);

    await homePage.open();
    await homePage.clickTab('Advanced');

    await scroll.container.scrollIntoViewIfNeeded();
    await page.waitForTimeout(800);

    // Initial visible count
    const initial = await scroll.getVisibleCount();
    console.log('Initial visible items:', initial);

    expect(initial).toBeGreaterThan(0);

    // Scroll multiple times inside the scroll container
    await test.step('Scroll inside container', async () => {
      await scroll.scrollInside(6);
    });

    // Updated visible count
    const updated = await scroll.getVisibleCount();
    console.log('Updated visible items:', updated);

    // Final assertion
    expect(updated).not.toBe(initial);
    console.log('✔ Visible items updated after scrolling');
  });
});
