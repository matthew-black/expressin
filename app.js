const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const expressValidator = require('express-validator');
const mongojs = require('mongojs');
const db = mongojs('peepapp', ['peeps'])

var app = express();

// Configures View Engine (templating) and Path to Views Folder
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Configures Body Parser Middleware Usage
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// Global Variables
app.use(function(req, res, next){
  res.locals.errors = null;
  next();
})
app.use(expressValidator());

// Sets Path to Public (Static) Folder (CSS files, jQuery...just like SinatraLand)
app.use(express.static(path.join(__dirname, 'public')));

// Sends the index.ejs view to be rendered, gets peeps from MongoDB-Land
app.get('/', function(req, res){
  db.peeps.find(function (err, docs) {
    res.render('index', {
      peeps: docs
    });
  })
});

app.post('/peeps', function(req, res){
  req.checkBody('first_name', 'First Name is required.').notEmpty();
  req.checkBody('last_name', 'Last Name is required.').notEmpty();
  req.checkBody('email', 'Email is required.').notEmpty();

  var errors = req.validationErrors();
  if(errors){
    db.peeps.find(function (err, docs) {
      res.render('index', {
        peeps: docs,
        errors: errors
      });
    })
  } else {
    var newPeep = {
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email
    }
    db.peeps.insert(newPeep, function(err, ress) {
      if(err){
        console.log(err);
      }
    });
    res.redirect('/');
  }
})

app.listen(3000, function(){
  console.log("Matthew's first Express server has started!")
});

