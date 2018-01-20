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

// Easy to use this to make an API and just send JSON:
// var people = [
//   {
//     name: 'Matthew Black',
//     age: 31
//   },
//   {
//     name: 'Shari Black',
//     age: 31
//   },
//   {
//     name: 'Roger Federer',
//     age: 36
//   }
// ]

// app.get('/', function(req, res){
//   res.json(people);
// });

app.get('/', function(req, res){
  res.send('Hello');
})

app.listen(3000, function(){
  console.log("Matthew's first Express server has started!")
});

