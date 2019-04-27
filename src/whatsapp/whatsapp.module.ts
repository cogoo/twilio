import { Module } from '@nestjs/common';
import { WhatsappController } from './whatsapp.controller';

@Module({
  providers: [],
  controllers: [WhatsappController],
})
export class WhatsappModule {}
