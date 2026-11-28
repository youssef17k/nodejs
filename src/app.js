
const express = require('express')
const { greet } = require('./greet')

const app = express()

app.get('/', (req, res) => {
  res.send(greet())
})

app.get('/hello/:name', (req, res) => {
  res.send(greet(req.params.name))
})

app.get('/health', (req, res) => {
  res.json({ status: 'ok' })
})

module.exports = app