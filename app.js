const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

var app = express();

// <middleware example>
  // var logger = function(req, res, next){
  //   console.log('Logging...');
  //   next();
  // }
  // app.use(logger);
// </middleware example>

// Body Parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// Sets Path to Public Folder, or Static Folder (CSS files, jQuery, etc...)
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res){
  res.send('Hello Derper!');
});

app.listen(3000, function(){
  console.log("Matthew's first Express server has started!")
});

