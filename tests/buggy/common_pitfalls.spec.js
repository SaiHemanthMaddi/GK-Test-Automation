import { test, expect } from '../../fixtures/customFixtures.js';

test('Buggy - Common Automation Pitfalls content is correct', async ({ homePage, commonPitfallsPage }) => {

  await homePage.open();
  await homePage.clickTab('Buggy');

  const content = await commonPitfallsPage.getContent();
  expect(content.title).toBe('Common Automation Pitfalls');
  expect(content.dontItems.length).toBeGreaterThan(0);
  expect(content.doItems.length).toBeGreaterThan(0);

  expect(content.dontItems.join(' ').toLowerCase()).toContain('relying on dynamic ids');
  expect(content.doItems.join(' ').toLowerCase()).toContain('use data-testid');
});
