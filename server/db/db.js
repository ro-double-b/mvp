var mysql = require('mysql');

var db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'hi',
  database: 'results'
})

db.connect(function(err) {
  if(err) {
    console.log('Error connecting to the database', err)
    return
  }
  console.log('Connected to the database!')
})

var user = {
  user_name: 'robb',
  user_password: 'test this out mannn'
}

var query = db.query('insert into Users set ?', user, function(err, result) {
  console.log(query.sql)
})

var test = db.query('select * from Users', function(err, result) {
  console.log(results)
})