angular.module('fantasyDragRace', ['ngRoute'])
.config(function($routeProvider) {
  $routeProvider
  .when('/sigup', {
    templateurl: 'app/views/signup.html'
  })
  .when('/login', {
    templateurl: 'app/views/login.html'
  })
  .otherwise({
    redirectTo: '/'
  })

})