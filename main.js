const checkAvailability = require('./helpers/check-availability');

const PRODUCT_IN_SHOP_PAGE =
  'https://suplementoscolombia.co/creatina-micronizada-on-60-servcios';
const $ELEMENT = '.new_price';

const main = async () => {
  const isUnavailable = await checkAvailability(PRODUCT_IN_SHOP_PAGE, $ELEMENT);

  if (isUnavailable) console.log('Product is unavailable');
  else console.log('Product is available');
};

main();
