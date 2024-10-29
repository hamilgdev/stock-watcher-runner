const playwright = require('playwright');

const scrapper = async (url) => {
  const launchOptions = {
    headless: false,
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
