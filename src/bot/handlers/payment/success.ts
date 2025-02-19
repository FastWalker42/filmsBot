import { Context } from 'grammy'

export default async (ctx: Context) => {
  console.log(JSON.stringify(ctx.message?.successful_payment!))

  ctx.reply('⭐️🚀 Премиум куплен!')
}
