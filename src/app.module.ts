import { Module } from '@nestjs/common';
import { TelegrafModule} from 'nestjs-telegraf';
import { BotModule} from './bot/bot.module';

@Module({
  imports: [
    TelegrafModule.forRoot({
      token: '7700833481:AAHejiQemqJMfHG97BS_QWjaVXi92Lw5Cxs'
    }),
    BotModule
  ],
  
})
export class AppModule {}
