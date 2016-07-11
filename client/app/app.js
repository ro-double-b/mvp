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
  .when('/rules', {
    templateUrl: 'app/views/rules.html',
    controller: 'AuthController'
    // controller to be updated
  })  
  .when('/home', {
    templateUrl: 'app/views/home.html',
    controller: 'AuthController'
    // controller to be updated
  })
  .when('/selection', {
    templateUrl: 'app/views/selection.html',
    controller: 'AuthController'
    // controller to be updated
  })
  .when('/results', {
    templateUrl: 'app/views/results.html',
    controller: 'AuthController'
    // controller to be updated
  })
  .otherwise({
    redirectTo: '/'
  })

})
