var express = require('express');
var app = express();
var bodyParser = require('body-parser')
// var methodOverride = require('methodOverride')

var port = 3000

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(express.static(__dirname + '/../client'))

// existing users
app.post('/api/users/login', function(request, response) {
  console.log('testin you just sent a post request buddy: signin')
})
app.get('/api/users/login', function(request, response) {
  // nothing makes a request to this route yet
})
// new users
app.post('/api/users/signup', function(request, response) {
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
