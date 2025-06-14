import { Injectable } from "@nestjs/common";
import { Ctx, On, Start, Update ,Hears,} from "nestjs-telegraf";
import { Context } from "telegraf";
import { BotServise } from "./bot.service";

@Update()
@Injectable()



export class BotUpdate{
    constructor( private readonly BotSevise: BotServise) {}

    


    @On('contact')
    onContact(@Ctx() ctx: Context) {
     const contact = (ctx.message as any).contact;
     const phoneNumber = contact?.phone_number;
     const firstName = contact?.first_name;

     if (phoneNumber) {
       ctx.reply(`✅ Raqamingiz qabul qilindi: ${phoneNumber}`);
        return this.BotSevise.onStartMenu(ctx);
    } else {
         ctx.reply('Telefon raqami olinmadi.');
        }
    }


    @Start()
    onStartMenu(@Ctx() ctx: Context){
        return this.BotSevise.onStart(ctx);
    }

    @Hears('Menu')
    onMenu(@Ctx() ctx: Context){
        return this.BotSevise.onMenu(ctx);
    }

    @Hears('Back')
    onBack(@Ctx() ctx: Context){
        return this.BotSevise.onStart(ctx);
    }

    @Hears(['Instagram', 'Telegram', 'YouTube', 'GitHub'])
      onPlatformLink(@Ctx() ctx: Context) {
         const msg = ctx.message as { text: string };
          const platform = msg.text;
    return this.BotSevise.sendLink(ctx, platform);
    }

    @Hears('help')
     onHelp(@Ctx() ctx: Context) {
        return this.BotSevise.onHelp(ctx);
     }

    @Hears('Payments')
     onPayments(@Ctx() ctx: Context) {
        return this.BotSevise.onPayment(ctx);
     }
}      
