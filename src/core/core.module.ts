import { Module, Global } from '@nestjs/common';
import { TwilioService } from './twilio/twilio.service';

@Global()
@Module({
  providers: [TwilioService],
  exports: [TwilioService],
})
export class CoreModule {}
