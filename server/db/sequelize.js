// mysql.server start
// mysql 

var Sequelize = require('sequelize')
var db = new Sequelize('test2', 'root', 'hi')

var Users = db.define('users', {
  user_id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
    },
  user_name: Sequelize.STRING,
  user_password: Sequelize.STRING
})

var Queens = db.define('queens', {
  queen_id: Sequelize.INTEGER, // primary key of queens
  queen_name: Sequelize.STRING
})

var Selections = db.define('selections', {
  selection_id: Sequelize.INTEGER, // primary key of selection
  selection_user_id: Sequelize.INTEGER, // foreign key of user
  selection_queen_id: Sequelize.INTEGER, // foreign key of queen
  selection_week_id: Sequelize.INTEGER // foreign key of week
})

var Wins = db.define('wins', {
  week_id: Sequelize.INTEGER, // primary key of wins
  win_queen_id: Sequelize.INTEGER // foreign key of queens
})

Selections.hasMany(Users, {as: 'selection_user_id'})
Selections.hasMany(Queens, {as: 'selection_queen_id'})
Selections.hasMany(Wins, {as: 'selection_week_id'})

Users.sync()
Queens.sync()
Selections.sync()
Wins.sync()