const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

var app = express();

app.listen(3000, function() {
  console.log("Matthew's first Express server has started!")
});