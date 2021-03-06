import { Controller, Post, HttpCode, Header, Body } from '@nestjs/common';
import { TwilioService } from '../core/twilio/twilio.service';

@Controller('whatsapp')
export class WhatsappController {
  constructor(private readonly twilioService: TwilioService) {}

  @Post()
  @HttpCode(200)
  @Header('Content-Type', 'text/xml')
  handleSMS(@Body() body): string {
    const message = this.twilioService.messageResonse();
    message.body('Whats my name, say my name!' + body.Body);

    if (body.Body.indexOf('with image') >= 0) {
      message.media(
        'https://farm8.staticflickr.com/7090/6941316406_80b4d6d50e_z_d.jpg',
      );
    }
    return message.toString();
  }
}
