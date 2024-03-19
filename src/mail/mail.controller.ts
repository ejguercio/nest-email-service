import { Body, Controller, Get, Post } from '@nestjs/common';
import { MailService } from './mail.service';

@Controller('mail')
export class MailController {
  constructor(private readonly mailService: MailService) {}

  @Post()
  async sendEmail(
    @Body('name') name: string,
    @Body('subject') subject: string,
    @Body('text') text: string,
  ) {
    await this.mailService.sendEmail(name, subject, text);
    return { message: 'Email sent' };
  }
}
