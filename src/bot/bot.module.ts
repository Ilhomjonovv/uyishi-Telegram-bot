import { Module } from "@nestjs/common";
import { BotUpdate} from './bot.update';
import { BotServise} from './bot.service';

@Module({
    providers: [BotUpdate, BotServise],
})
export class BotModule{}