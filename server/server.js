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
  console.log('testin you just sent a post request buddy')
})
app.get('/api/users/login', function(request, response) {

})
// new users
app.post('/api/users/signup', function(request, response) {

})

// select queen
app.post('/api/selection', function(request, response) {

})
// display results
app.get('/api/selection', function(request, response) {

})

app.listen(port);
console.log('Your server is listening on port: ' + port)
module.exports = app;
