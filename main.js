const cron = require('node-cron');
const express = require('express');

const { envs } = require('./config/env.config');
const checkAvailability = require('./helpers/check-availability');
const sendWhatsAppNotification = require('./notifications/send-whatsapp-notification');

let count = 1;

const jobFunction = async () => {
  console.log('Running cron job...' + count++);
  try {
    const isUnavailable = await checkAvailability(
      envs.URL_PRODUCT_SHOP,
      envs.DOM_SELECTOR
    );

    if (isUnavailable) console.log('El producto no está disponible');
    else await sendWhatsAppNotification('¡El producto está disponible! 🎉');
  } catch (error) {
    console.error('Error en el cron job:', error);
  }
};

console.log('Cron job scheduled to run at', envs.CRON_SCHEDULE_TIME);
cron.schedule(envs.CRON_SCHEDULE_TIME, jobFunction);

const app = express();

app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok', timestamp: new Date() });
});

app.listen(envs.PORT, () => {
  console.log('Server running on port', envs.PORT);
});
