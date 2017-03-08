var express = require('express');
var {db} = require('./db');
var app = express();

app.use(express.static('public'))

app.get('/', function (req, res) {
  res.send('My Hero is running!')
})

app.listen(3002, function () {
  console.log('My Theater app 2.0 listening on port 3002!')
})