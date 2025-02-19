import { Context } from 'grammy'

export default async (ctx: Context) => {
  await ctx.reply(JSON.stringify(ctx.update))
}
