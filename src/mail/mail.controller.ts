import { Body, Controller, Post } from '@nestjs/common';
import { MailService } from './mail.service';
import { MailToSendDto } from './dto/mail.dto';

@Controller('mail')
export class MailController {
  constructor(private readonly mailService: MailService) {}

  @Post()
  async sendEmail(@Body() mailToSendDto: MailToSendDto) {
    await this.mailService.sendEmail(
      mailToSendDto.name,
      mailToSendDto.subject,
      mailToSendDto.message,
    );
    return { message: 'Email sent' };
  }
}
