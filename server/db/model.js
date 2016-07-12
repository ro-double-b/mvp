var mongoose = require('mongoose')

var userSchema = new mongoose.Schema({
  user_id: Number,
  user_name: String,
  user_password: String
})

var queenSchema = new mongoose.Schema({
  queen_id: Number,
  queen_name: String
})

var winSchema = new mongoose.Schema({
  week_id: Number,
  win_queen_id: Number
})

var selectionSchema = new mongoose.Schema({
  selection_id: Number,
  selection_user_id: Number,
  selection_queen_id: Number,
  selection_week_id: Number
})