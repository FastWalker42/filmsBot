import { Bot } from 'grammy'

import startHandler from './start'
import invoiceHandler from './payment/invoice'
import preCheckoutHandler from './payment/preCheckout'
import successHandler from './payment/success'
import msgHandler from './msg'

export default (bot: Bot) => {
  bot.command('start', startHandler)
  bot.command('pay', invoiceHandler)

  bot.on('pre_checkout_query', preCheckoutHandler)
  bot.on('message:successful_payment', successHandler)

  bot.on('message', msgHandler)
}
