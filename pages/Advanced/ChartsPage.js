export class ChartsPage {
  constructor(page) {
    this.page = page;
    this.barChart = page.locator('[data-testid="bar-chart"] div[data-testid^="bar-"]');
    this.lineChart = page.locator('[data-testid="line-chart"] > div span:last-child');
  }

  async getBarChartValues() {
    const count = await this.barChart.count();
    const values = [];
    for (let i = 0; i < count; i++) {
      values.push(await this.barChart.nth(i).innerText());
    }
    return values;
  }

  async getLineChartValues() {
    const count = await this.lineChart.count();
    let values = [];
    for (let i = 0; i < count; i++) {
      values.push(await this.lineChart.nth(i).innerText());
    }
    return values;
  }
}
