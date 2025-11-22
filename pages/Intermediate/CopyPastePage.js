export class IntermediateCopyPastePage {
  constructor(page) {
    this.page = page;
    this.copyText = page.getByTestId('copy-text');
    this.pasteInput = page.getByTestId('paste-input');
  }

  async clickToCopy() {
    await this.copyText.click();
    // element likely uses execCommand('copy') or clipboard API
  }

  async pasteToInput(value) {
    await this.pasteInput.fill(value);
  }
}
