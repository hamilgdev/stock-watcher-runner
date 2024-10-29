const Joi = require('joi');
require('dotenv').config();

const envVarsSchema = Joi.object({
  TWILIO_SID: Joi.string().required(),
  TWILIO_AUTH_TOKEN: Joi.string().required(),
  TWILIO_PHONE_NUMBER: Joi.string().required(),
  TWILIO_DESTINATION_PHONE_NUMBER: Joi.string().required(),
}).unknown(true);

const { error, value } = envVarsSchema.validate(process.env);

if (error) throw new Error(`Config validation error: ${error.message}`);

const envVars = value;

module.exports = { envs: envVars };
