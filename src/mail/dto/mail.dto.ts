import { IsString, Length } from 'class-validator';

export class MailToSendDto {
  @IsString()
  @Length(2, 25)
  name: string;

  @IsString()
  @Length(2, 30)
  subject: string;

  @IsString()
  @Length(2, 1000)
  message: string;
}
