import { test, expect } from '@playwright/test';
import { HomePage } from '../../pages/HomePage';
import { PitfallsPage } from '../../pages/Buggy/CommonAutomationPitfallsPage';

test('Buggy - Common Automation Pitfalls content is correct', async ({ page }) => {
  const home = new HomePage(page);
  const pitfalls = new PitfallsPage(page);

  await home.open();
  await home.clickTab('Buggy');

  await expect(pitfalls).toBeVisible();
  const content = await pitfalls.getContent();
  expect(content.title).toBe('Common Automation Pitfalls');
  expect(content.dontItems.length).toBeGreaterThan(0);
  expect(content.doItems.length).toBeGreaterThan(0);

  expect(content.dontItems.join(' ').toLowerCase()).toContain('relying on dynamic ids');
  expect(content.doItems.join(' ').toLowerCase()).toContain('use data-testid');
});
