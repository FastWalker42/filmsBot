import 'dotenv/config'
import express from 'express'
import bodyParser from 'body-parser'
import bot from './bot'

const app = express()
const WEBHOOK_PATH = `/webhook/${process.env.BOT_TOKEN}`

bot.api.setWebhook(`${process.env.HOST_URL}${WEBHOOK_PATH}`)

app.use(bodyParser.json())

app.post(WEBHOOK_PATH, (req, res) => {
  bot.handleUpdate(req.body)
  res.sendStatus(200)
})

app.get('/', (req, res) => {
  res.send('<h1>Hello</h1>')
})

app.listen({ port: process.env.PORT, hostname: '0.0.0.0' }, () => {
  console.log(`Сервер запущен на порту ${process.env.PORT}`)
})
