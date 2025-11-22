export class ProductsPage {
  constructor(page) {
    this.page = page;

    // UI elements
    this.search = page.locator('[data-testid="product-search"]');
    this.categoryFilter = page.locator('[data-testid="category-filter"]');
    this.sortSelect = page.locator('[data-testid="sort-select"]');

    this.productCards = page.locator('[data-testid^="product-"]');
    this.productNames = page.locator('[data-testid^="product-"] h4');
    this.productPrices = page.locator('[data-testid^="product-"] [data-testid="price"]');
    this.productStock = page.locator('[data-testid^="product-"] [data-testid="stock"]');

    // Hard-coded categories
    this.categories = ['Automation', 'Training', 'Tools'];

    // Hard-coded sorting
    this.sortOptions = ['Sort by Name', 'Sort by Price', 'Sort by Rating'];
  }

  async searchProduct(keyword) {
    await this.search.fill(keyword);
    await this.page.waitForTimeout(400);
  }

  async getAllProductNames() {
    return await this.productNames.allInnerTexts();
  }

  async getAllProductPrices() {
    const raw = await this.productPrices.allInnerTexts();
    return raw.map((value) => Number(value.replace(/[^\d.]/g, '')));
  }

  async getAllProductStockStatus() {
    return await this.productStock.allInnerTexts();
  }

  async getCardCount() {
    return await this.productCards.count();
  }

  async isPriceFormatValid(text) {
    const priceRegex = /^(\₹|\$)\d+(\.\d{2})?$/;
    return priceRegex.test(text);
  }
}
