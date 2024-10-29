const puppeteer = require('puppeteer');
const { envs } = require('./env.config');

const isProduction = envs.NODE_ENV === 'production';

const scrapper = async (url) => {
  const launcher = await puppeteer.launch({
    headless: isProduction,
    defaultViewport: null,
    executablePath: '/usr/bin/google-chrome',
    args: ['--no-sandbox'],
  });

  try {
    const page = await launcher.newPage();
    await page.goto(url);
    await page.setViewport({ width: 1080, height: 1024 });

    const content = await page.content();
    return { content, browser: launcher };
  } catch (error) {
    console.error('Error en scrapper:', error);
  } finally {
    // Asegura que el navegador se cierre, incluso si ocurre un error
    if (launcher) {
      await launcher.close();
    }
  }
};

module.exports = scrapper;
