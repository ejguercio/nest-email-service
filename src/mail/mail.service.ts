import { Injectable } from '@nestjs/common';
import * as sgMail from '@sendgrid/mail';
import * as dotenv from 'dotenv';
dotenv.config();

@Injectable()
export class MailService {
  constructor() {
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  }

  async sendEmail(name: string, subject: string, text: string) {
    try {
      const msg = {
        to: process.env.MAIL_TO, // Destinatario del mensaje
        from: process.env.SENDGRID_MAIL_AUTH, // Correo verificado en SendGrid
        subject,
        text: `Mensaje de ${name}\n\n${text}`,
      };

      const infoResponse = await sgMail.send(msg);
      console.log('Message sent:', infoResponse);
    } catch (error) {
      console.error('Error sending email:', error);
      if (error.response) {
        console.error(error.response.body);
      }
    }
  }
}
