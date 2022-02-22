const express = require('express')
const nodemailer = require('nodemailer')
const app = express()
const route = express.Router()
const port = 5000
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use('/v1', route)
app.get('/', function (req, res) { res.sendFile('public/index.html', { root: __dirname }) })
app.use(express.static(__dirname + '/public'))
app.get('/offer.html', function (req, res) { res.sendFile('public/offer.html', { root: __dirname }) })
app.get('/politics.html', function (req, res) { res.sendFile('public/politics.html', { root: __dirname }) })
let num = 1
app.post('/submit', async (req, res) => {
  res.status(200)
  const data = req.body
  let message = 'Имя заявителя - ' + data.name
  if (data.tel) message += '\n' + 'Телефон заявителя - ' + data.tel
  if (data.email) message += '\n' + 'Почта заявителя - ' + data.email
  if (data.broker) message += '\n' + 'Название брокера - ' + data.broker
  if (data.sum) message += '\n' + 'Сумма потери - ' + data.sum
  if (data.time) message += '\n' + 'Срок с пополнения  - ' + data.time
  if (data.desc) message += '\n' + 'Описание - ' + data.desc

  const transporter = nodemailer.createTransport({
    host: "smtp.hostinger.com",
    port: 587,
    secure: false,
    auth: {
      user: 'bot@chargeback-law.ru',
      pass: 'Monitoring2021'
    }
  })
  const mailOptions = {
    from: 'bot@chargeback-law.ru',
    to: 'vopros@chargeback-law.ru',
    subject: 'Заявка №' + num,
    text: message
  }
  // console.log(mailOptions)
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error)
    } else {
      console.log('Email sent: ' + info.response)
    }
  })
  num++
})
app.listen(port)
