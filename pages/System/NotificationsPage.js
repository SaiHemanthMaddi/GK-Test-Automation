export class NotificationsPage {
  constructor(page) {
    this.page = page;
    this.notificationsToggle = page.locator('[data-testid="notifications-toggle"]');
    this.sendNotificationBtn = page.locator('[data-testid="send-notification"]');
    this.sendPushNotificationBtn = page.locator('[data-testid="send-push-notification"]');
    this.notificationStatus = page.locator('[data-testid="notification-status"]');
  }

  async safeClick(locator, opts = {}) {
    await this.page
      .waitForFunction(
        () => {
          const el = document.elementFromPoint(window.innerWidth / 2, window.innerHeight / 2);
          return el && el !== document.documentElement;
        },
        { timeout: 5000 }
      )
      .catch(() => null);
    await locator.scrollIntoViewIfNeeded();
    await locator.click({ ...opts, timeout: opts.timeout ?? 5000 });
  }

  async toggleNotifications() {
    await this.safeClick(this.notificationsToggle);
  }

  async sendTestNotification() {
    await this.safeClick(this.sendNotificationBtn);
  }

  async sendPushNotification() {
    await this.safeClick(this.sendPushNotificationBtn);
  }

  async getNotificationStatus() {
    return (await this.notificationStatus.innerText()).trim();
  }
}
