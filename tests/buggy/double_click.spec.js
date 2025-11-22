import { test, expect } from '@playwright/test';
import { HomePage } from '../../pages/HomePage';
import { DoubleClickPage } from '../../pages/Buggy/DoubleClickPage';

test('Buggy - Counter increments on single click (even though UI says double)', async ({
  page,
}) => {
  const home = new HomePage(page);
  const dc = new DoubleClickPage(page);

  await home.open();
  await home.clickTab('Buggy');

  const before = await dc.beforeClickCount();
  console.log('Before:', before);

  await dc.clikTwiceBtn();

  const after = await dc.afterClickCount();
  console.log('After:', after);
});
