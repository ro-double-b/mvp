var express = require('express');
var app = express();
var bodyParser = require('body-parser')
// var methodOverride = require('methodOverride')
var mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/db')
var schemas = require('./db/models.js')

var port = 3000

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(express.static(__dirname + '/../client'))

// existing users
app.post('/api/users/login', function(request, response) {
  console.log(schemas.User)
  console.log(request.body.user)
  // schemas.User.create({user_name: request.body.user, user_password: request.body.password}, function(err, res) {
  //   if(err) {
  //     console.log(err)
  //   } else {
  //     console.log
  //   }
  // })
  console.log('testin you just sent a post request buddy: signin')
})
app.get('/api/users/login', function(request, response) {
  // nothing makes a request to this route yet
})
// new users
app.post('/api/users/signup', function(request, response) {
  console.log(request.body)
  console.log('testin you just sent a post request buddy: signup')
})

// select queen
app.post('/api/selection', function(request, response) {
  // nothing makes a request to this route yet
})
// display results
app.get('/api/selection', function(request, response) {
  // nothing makes a request to this route yet
})

app.listen(port);
console.log('Your server is listening on port: ' + port)
module.exports = app;
