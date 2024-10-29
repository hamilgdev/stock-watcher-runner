const playwright = require('playwright');
const { envs } = require('./env.config');

const isProduction = envs.NODE_ENV === 'production';

const scrapper = async (url) => {
  const launchOptions = {
    headless: isProduction, // change to true for production to run in the background
  };

  try {
    const browser = await playwright.chromium.launch(launchOptions);
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto(url);
    await page.waitForTimeout(5000);

    return { browser, page };
  } catch (error) {
    console.error(error);
  }
};

module.exports = scrapper;
