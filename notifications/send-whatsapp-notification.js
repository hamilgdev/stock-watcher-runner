import { envs } from '../config/env.config';

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
