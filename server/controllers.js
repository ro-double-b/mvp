var schemas = require('./db/models.js')

module.exports = {
  postLogin: function(req, res) {
   console.log('you got into this post login request!')   
  },

  getLogin: function(req, res) {
    console.log('you got into this get login request')
  },

  postSignup: function(req, res) {
    console.log('you got into this get login request')
  },

  postSelection: function(req, res) {
    console.log('you got into this post selection reqeust')
  },

  getSelection: function(req, res) {
    console.log('you got into this get selection request!')
  }
}