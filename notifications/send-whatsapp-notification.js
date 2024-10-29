const { envs } = require('../config/env.config');
const senderClient = require('../config/sender');

const sendWhatsAppNotification = async (message) => {
  try {
    await senderClient.messages.create({
      body: message,
      from: `whatsapp:${envs.TWILIO_PHONE_NUMBER}`,
      to: `whatsapp:${envs.TWILIO_DESTINATION_PHONE_NUMBER}`,
    });
  } catch (error) {
    console.log('Error sending WhatsApp notification', error);
  }
};

module.exports = sendWhatsAppNotification;
