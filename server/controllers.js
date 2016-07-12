var schemas = require('./db/models.js')

module.exports = {
  postLogin: function(req, res) { // function handling when you click the sign in button
    // check to see if the user is in the database
      // if so checks to see if the password matches what is in the database
        // if so responds back with a success

      // will also have to send to the global scope that you are said user

    // else sends back an error back to the login page
   console.log('you got into this post login request!')   
  },

  // getLogin: function(req, res) {
  //   console.log('you got into this get login request')
  // },

  postSignup: function(req, res) { // function handling when you click a sign up button
    console.log(req.body)
    // check to see if the user has been taken before
    schemas.User.findOne({'user_name': req.body.user}, function(err, doc) {
      if(err) { // if not then will submit to the database
        var user = new schemas.User({
          user_name: req.body.user,
          user_password: req.body.password
        })
        user.save(function(err) {
          if(err) throw err;
          console.log('new user created!')
        })
      }
    })
  },

  postSelection: function(req, res) { // function handling when you click the select button
    // checks to see who the user is
      // check to make sure that the user along with that week number has not been submitted
        // if none both of those are true, sends information to the database

      // else just updates said entry
    // else sends back that noone is signed in and cannot make selection
    console.log('you got into this post selection reqeust')
  },

  getSelection: function(req, res) {
    // whenever the results page is rendered, do a get request for all of the data

    // organize the data and render it to the title based on the filter function
    console.log('you got into this get selection request!')
  }
}