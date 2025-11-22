export class BusinessCartPage {
  constructor(page) {
    this.page = page;

    this.emptyCartText = page.locator("[data-testid='empty-cart']");

    this.addButton = (i) => page.locator(`button[data-testid='add-to-cart-${i}']`);
    this.addButtons = page.locator("button[data-testid^='add-to-cart']");

    this.cartItems = page.locator("[data-testid='cart-item']");
    this.cartItemNames = page.locator("[data-testid='cart-item'] .font-semibold");
    this.productName = (i) => this.page.locator(`[data-testid="product-${i}"] h4`);
  }

  async isCartEmpty() {
    return this.emptyCartText.innerText();
  }
}
