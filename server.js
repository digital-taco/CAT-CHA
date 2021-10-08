require('dotenv').config()
const express = require('express')

const { PORT = 3000 } = process.env
const app = express()

app.get('/health', (req, res) => res.json({ status: 'up', check_time: new Date().toISOString() }))

app.listen(PORT, (err) => err ? console.error(err) : console.log('Listening at PORT ' + PORT))
