var express = require('express');
var app = express();
var bodyParser = require('body-parser')
// var methodOverride = require('methodOverride')

var port = 3000

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(express.static(__dirname + '/../client'))

// require('./routes')(app, express)

app.listen(port);
console.log('Your server is listening on port: ' + port)
module.exports = app;
