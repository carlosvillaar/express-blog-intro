const { log } = require('console');
const express = require('express');
const app = express();
const port = 3000;
const posts = require('./object');

app.get('/', (req, res) => {
  res.send('Server del mio blog')
})

app.get('/bacheca', (req, res) => {
  res.json(posts)
})

app.listen(port, () => {})