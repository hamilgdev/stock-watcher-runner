const Joi = require('joi');
require('dotenv').config();

const envVarsSchema = Joi.object({
  TWILIO_SID: Joi.string().required(),
  TWILIO_AUTH_TOKEN: Joi.string().required(),
  TWILIO_PHONE_NUMBER: Joi.string().required(),
  TWILIO_DESTINATION_PHONE_NUMBER: Joi.string().required(),
  CRON_SCHEDULE_TIME: Joi.string().required(),
  URL_PRODUCT_SHOP: Joi.string().required(),
  DOM_SELECTOR: Joi.string().required(),
}).unknown(true);

const { error, value } = envVarsSchema.validate(process.env);

if (error) throw new Error(`Config validation error: ${error.message}`);

const envVars = value;

module.exports = { envs: envVars };
