export class DynamicTablePage {
  constructor(page) {
    this.page = page;
  }

  async editFirstRow(newName, newValue) {
    // --- Edit Name cell ---
    const nameCell = this.page.locator('[data-testid="cell-name-1"]');
    await nameCell.click();
    const nameInput = nameCell.locator('input');

    await nameInput.click({ clickCount: 3 });
    await nameInput.press('Backspace');
    await nameInput.fill(newName);

    const valueCell = this.page.locator('[data-testid="cell-value-1"]');
    await valueCell.click();
    const valueInput = valueCell.locator('input');

    await valueInput.click({ clickCount: 3 });
    await valueInput.press('Backspace');
    await valueInput.fill(newValue);
  }

  async deleteFirstRow() {
    await this.page.locator('[data-testid="delete-row-1"]').click();
  }

  async rowExists(row) {
    return await this.page.locator(`[data-testid="cell-name-${row}"]`).count();
  }
}
