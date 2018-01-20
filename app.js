const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

var app = express();

app.get('/', function(req, res) {
  res.send('Hello World!');
});

app.listen(3000, function() {
  console.log("Matthew's first Express server has started!")
});