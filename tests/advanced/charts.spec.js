import { test, expect } from '../../fixtures/customFixtures.js';
import { HomePage } from '../../pages/HomePage';
import { ChartsPage } from '../../pages/Advanced/ChartsPage';

test.describe('Advanced - Charts & Graphs', () => {
  test('Validate bar chart & line chart values', async ({ page, homePage }) => {
    
    const charts = new ChartsPage(page);

    await homePage.open();
    await homePage.clickTab('Advanced');

    await test.step('Validate bar chart values', async () => {
      const bars = await charts.getBarChartValues();
      console.log('Bar chart values:', bars);
      expect(bars.length).toBeGreaterThan(0);
    });

    await test.step('Validate line chart values', async () => {
      const lines = await charts.getLineChartValues();
      console.log('Line chart values:', lines);
      expect(lines.length).toBeGreaterThan(0);
    });
  });
});
