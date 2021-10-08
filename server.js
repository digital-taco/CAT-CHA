require('dotenv').config()
const express = require('express')
const { resolve } = require('path')
const caas = require('./lib/caas')

const { PORT = 3000 } = process.env
const app = express()
const router = express.Router()

router.get('/health', (req, res) => res.json({ status: 'up', check_time: new Date().toISOString() }))
router.use('/cats', caas)
app.use('/api', router)

app.use(express.static(resolve(__dirname, './client/dist')))
app.get('*', (req, res) => {
  res.sendFile(resolve(__dirname, './client/dist', 'index.html'))
})

app.listen(PORT, (err) => err ? console.error(err) : console.log('Listening at PORT ' + PORT))
