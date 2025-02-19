import { Context } from 'grammy'
import { checkUser, getBalance, setBalance } from '../../db/methods'

export default async (ctx: Context) => {
  console.time('Request Time')

  const { id } = ctx.message!.from!

  await checkUser(id)

  let balance = await getBalance(id!)
  balance = await setBalance(id!, balance + 1)

  await ctx.replyWithSticker(
    'CAACAgIAAxkBAAExqoBnq7r7XxNxa27G7hk7DmMtgnWBuAAC72oAAvc3SEkQARFLH_VphjYE'
  )
  await ctx.reply('Привет!')
  console.timeEnd('Request Time')
}
