const checkAvailability = require('./helpers/check-availability');
const sendWhatsAppNotification = require('./notifications/send-whatsapp-notification');

const PRODUCT_IN_SHOP_PAGE =
  'https://suplementoscolombia.co/creatina-micronizada-on-60-servcios';
const $ELEMENT = '.new_price';

const main = async () => {
  const isUnavailable = await checkAvailability(PRODUCT_IN_SHOP_PAGE, $ELEMENT);

  if (!isUnavailable)
    return await sendWhatsAppNotification('Product is available');
  return console.log('Product is unavailable');
};

main();
