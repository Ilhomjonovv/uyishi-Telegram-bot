import { Injectable } from "@nestjs/common";
import { platform } from "os";
import { Context, Markup } from 'telegraf';

@Injectable()
export class BotServise{
    async onStart(ctx: Context) {
  await ctx.reply(
    'Botga xush kelibsiz. Davom etish uchun telefon raqamingizni yuboring ',
    Markup.keyboard([
      [Markup.button.contactRequest('📱 Raqamni yuborish')],
    ])
      .resize()
      .oneTime()
  );
}

    async onStartMenu(ctx:  Context){
        try{
            ctx.reply(
                'asosiy menu',
                Markup.keyboard([
                    ['Settings', 'help'],
                    ['Menu', 'Payments']
                ])
                    .resize()
                    .oneTime(),
            );
        }catch (error){
            console.log(error)
        }
    }

    async onMenu(ctx: Context){
        try{
            ctx.reply(
                'Menudan brini tanlang ',
                Markup.keyboard([
                    ['You tube', 'Instagram'],
                    ['Telegram', 'git hub'],
                    ['Back'],
                ])

                    .resize()
                    .oneTime()
            );
        }catch(error){
            console.log(error)
        }
    }

    async sendLink(ctx : Context , platform: string){
        const links = {
            Instagram : 'https://www.instagram.com/ilkhomjonov.pg?igsh=c2w0dDBxa3RrYzYz',
            Telegram : 'https://t.me/bilganingda_edi',
            YouTube : '',
            GitHub: 'https://github.com/Ilhomjonovv'
        };

        const link = links[platform];
        if (link) {
            await ctx.reply(`${platform} havolasi : ${link}`)
        }else{
            await ctx.reply('Bunday platforma topilmadi');
        }
    }

    async onHelp( ctx: Context){
        await ctx.reply(`❕ Sizga yordam kerakmi ?

☎️ Qo'llab quvvatlash xizmati orqali bot haqidagi istalgan savolingizga javob topishingiz olishingiz mumkin!`, Markup.inlineKeyboard([

    [ Markup.button.url('☎️ Qollab-Quvvatlash', 'https://t.me/xojiakbar2270')]
])) 


       
    }

    async onPayment(ctx: Context){
        await ctx.reply(`   
                To'lov uchun carta 

    12345678901234  Palonchiyev  Palonchi`)
    }
}