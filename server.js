var express = require('express');
var {db} = require('./db');
var app = express();

app.use(express.static('public'))

app.get('/', function (req, res) {
  res.send('My Theater is running!')
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})