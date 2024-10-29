const cron = require('node-cron');

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

    if (!isUnavailable)
      await sendWhatsAppNotification('¡El producto está disponible! 🎉');
    else console.log('El producto no está disponible');
  } catch (error) {
    console.error('Error en el cron job:', error);
  }
};

console.log(
  'Cron job scheduled to run at. Every day at 8:00 and 17:00:',
  envs.CRON_SCHEDULE_TIME
);
// Runs every day at 8:00 am and 05:00 pm
cron.schedule(envs.CRON_SCHEDULE_TIME, jobFunction);
