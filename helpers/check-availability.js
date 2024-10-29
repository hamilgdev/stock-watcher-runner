const scrapper = require('../config/scrapper');

const checkAvailability = async (url, $el) => {
  const { content, browser } = await scrapper(url);

  const $isUnavailable = content.includes($el);
  await browser.close();

  if ($isUnavailable) return true;
  return false;
};

module.exports = checkAvailability;
