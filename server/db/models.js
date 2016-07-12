var mongoose = require('mongoose')

var userSchema = new mongoose.Schema({
  user_id: {
    type: Number,
    unique: true
  },
  user_name: String,
  user_password: String
})

var queenSchema = new mongoose.Schema({
  queen_id: {
    type: Number,
    unique: true
  },
  queen_name: String
})

var winSchema = new mongoose.Schema({
  week_id: {
    type: Number,
    unique: true
  },
  win_queen_id: Number
})

var selectionSchema = new mongoose.Schema({
  selection_id: {
    type: Number,
    unique: true
  },
  selection_user_id: Number,
  selection_queen_id: Number,
  selection_week_id: Number
})

mongoose.model('User', userSchema)
mongoose.model('Queen', queenSchema)
mongoose.model('Win', winSchema)
mongoose.model('Selection', selectionSchema)