const Twilio = require('twilio');

const { envs } = require('./env.config');

const senderClient = new Twilio(envs.TWILIO_SID, envs.TWILIO_AUTH_TOKEN);

module.exports = senderClient;
