var mysql = require('mysql');

var db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'hi'
})

db.connect(function(err) {
  if(err) {
    console.log('Error connecting to the database')
    return
  }
  console.log('Connected to the database!')
})