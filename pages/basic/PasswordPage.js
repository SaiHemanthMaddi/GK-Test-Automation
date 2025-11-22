export class BasicPasswordPage {
  constructor(page) {
    this.page = page;

    this.password = page.getByTestId('password-input');
    this.confirmPassword = page.getByTestId('confirm-password-input');
    this.strengthText = page.locator('text-sm.text-muted-foreground'); // Weak/Strong etc.
  }

  async fillPasswords(pass1, pass2) {
    await this.password.fill(pass1);
    await this.confirmPassword.fill(pass2);
  }
}
