import { test, expect } from '../../fixtures/customFixtures.js';
import { HomePage } from '../../pages/HomePage';
import { LanguagePage } from '../../pages/System/languagePage';

const LANGUAGE_MAP = {
  English: {
    greeting: 'Hello, welcome to our platform!',
    current: 'English (en)',
  },
  Español: {
    greeting: '¡Hola, bienvenido a nuestra plataforma!',
    current: 'Español (es)',
  },
  Français: {
    greeting: 'Bonjour, bienvenue sur notre plateforme!',
    current: 'Français (fr)',
  },
  Deutsch: {
    greeting: 'Hallo, willkommen auf unserer Plattform!',
    current: 'Deutsch (de)',
  },
  中文: {
    greeting: '您好，欢迎来到我们的平台！',
    current: '中文 (zh)',
  },
};

test('Validate all languages', async ({ page, homePage }) => {
  
  const langPage = new LanguagePage(page);

  await homePage.open();
  await homePage.clickTab('System');

  for (const lang of Object.keys(LANGUAGE_MAP)) {
    const { greeting, current } = LANGUAGE_MAP[lang];

    await langPage.selectLanguage(lang);

    await expect(langPage.greetingText).toHaveText(greeting);
    await expect(langPage.currentLanguage).toHaveText(`Current: ${current}`);
  }
});
