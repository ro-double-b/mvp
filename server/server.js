var express = require('express');
var app = express();
var bodyParser = require('body-parser')
// var methodOverride = require('methodOverride')
var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/mvp')

var controllers = require('./controllers.js')

var port = 3200

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(express.static(__dirname + '/../client'))

// existing users
app.post('/api/users/login', controllers.postLogin)

// new users
app.post('/api/users/signup', controllers.postSignup)

// Selection
app.post('/api/selection', controllers.postSelection)
app.get('/api/selection', controllers.getSelection)

app.listen(port);
console.log('Your server is listening on port: ' + port)
module.exports = app;
