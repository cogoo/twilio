import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SmsModule } from './sms/sms.module';
import { CoreModule } from './core/core.module';

@Module({
  imports: [SmsModule, CoreModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
