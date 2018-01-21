const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const expressValidator = require('express-validator');

var app = express();

// Configures View Engine (templating) and Path to Views Folder
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Configures Body Parser Middleware Usage
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(expressValidator());

// Sets Path to Public (Static) Folder (CSS files, jQuery...just like SinatraLand)
app.use(express.static(path.join(__dirname, 'public')));

var users = [
  {
    id: 1,
    first_name: "Matt",
    last_name: "Black",
    email: "matthew@email.com"
  },
  {
    id: 2,
    first_name: "Shari",
    last_name: "Black",
    email: "shari@email.com"
  },
  {
    id: 3,
    first_name: "Roger",
    last_name: "Federer",
    email: "roger@email.com"
  }
]
  // Easy to use Express to make an API and just send JSON (HELLO REACT!):
  // app.get('/', function(req, res){
  //   res.json(users);
  // });

// Sends the index.ejs view to be rendered
app.get('/', function(req, res){
  res.render('index', {
    title: 'Express Seems Neat',
    peeps: users
  });
});

app.post('/peeps', function(req, res){
  req.checkBody('first_name', 'First Name is required.').notEmpty();
  req.checkBody('last_name', 'Last Name is required.').notEmpty();

  var errors = req.validationErrors();
  if(errors){
    console.log('ERRORS!');
  } else {
    var newUser = {
      first_name: req.body.first_name,
      last_name: req.body.last_name
    }
    console.log(newUser);
  }
})

app.listen(3000, function(){
  console.log("Matthew's first Express server has started!")
});

