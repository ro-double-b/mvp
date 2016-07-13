var schemas = require('./db/models.js')

module.exports = {
  postLogin: function(req, res) { // function handling when you click the sign in button
    // check to see if the user is in the database
    schemas.User.findOne({'user_name': req.body.user, 'user_password': req.body.password}, function(err, doc) {
      if(doc !== null) {
        res.send(doc)
        console.log('successfully logged in!')
      } else {
        res.send('null')
        console.log('sorry your username or password are incorrect')
      }
    })
  },

  postSignup: function(req, res) { // function handling when you click a sign up button
    // check to see if the user has been taken before
    schemas.User.findOne({'user_name': req.body.user}, function(err, doc) {
      if(doc === null) { // if not then will submit to the database
        var user = new schemas.User({
          user_name: req.body.user,
          user_password: req.body.password
        })
        user.save(function(err, doc) {
          if(err) throw err;
          res.send(doc)
          console.log('new user created!')
        })
      } else {
        res.send('null')
        console.log('this username has already been taken!')
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