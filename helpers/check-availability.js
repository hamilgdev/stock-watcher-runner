const scrapper = require('../config/scrapper');

const checkAvailability = async (url, el) => {
  const { page, browser } = await scrapper(url);
  const $isUnavailable = await page.$(el);
  await browser.close();

  if ($isUnavailable) return true;
  return false;
};

module.exports = checkAvailability;
