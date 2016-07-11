angular.module('fantasyDragRace', ['ngRoute', 'fantasyDragRace.auth'])
.config(function($routeProvider, $locationProvider) {
  $routeProvider
  .when('/signup', {
    templateUrl: 'app/views/signup.html',
    controller: 'AuthController'
  })
  .when('/login', {
    templateUrl: 'app/views/login.html',
    controller: 'AuthController'
  })
  .otherwise({
    redirectTo: '/'
  })

})
