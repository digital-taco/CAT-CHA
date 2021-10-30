require('dotenv').config()
const express = require('express')
const { resolve } = require('path')
const cors = require('cors')

const caas = require('./lib/caas')

const { PORT = 3000 } = process.env
const app = express()

const blacklist = [
  // Fill this with the domains we want to block
  // 'https://www.imabadsite.com',
]
// Since we want to embed this many places, lets open up CORS
// to allow all things, except the ones we want to block
const corsOptions = {
  origin: function (origin, callback) {
    if (!blacklist.includes(origin)) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}

app.use(cors(corsOptions))
app.use(express.json())
app.use(express.static(resolve(__dirname, './client/dist')))

const router = express.Router()
router.get('/health', (req, res) => res.json({ status: 'up', check_time: new Date().toISOString() }))
router.use('/cats', caas)
app.use('/api', router)

app.get('*', (req, res) => {
  res.sendFile(resolve(__dirname, './client/dist', 'index.html'))
})

app.listen(PORT, (err) => err ? console.error(err) : console.info('Listening at PORT ' + PORT))
