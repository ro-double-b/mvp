angular.module('fantasyDragRace', [
  'ngRoute', 
  'fantasyDragRace.auth',
  'fantasyDragRace.select',
  'fantasyDragRace.result',
  'fantasyDragRace.home'

  ])
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
    // controller: 'RulesController'
    // controller to be updated
  })  
  .when('/home', {
    templateUrl: 'app/views/home.html',
    controller: 'HomeController'
    // controller to be updated
  })
  .when('/selection', {
    templateUrl: 'app/views/selection.html',
    controller: 'SelectController'
  })
  .when('/results', {
    templateUrl: 'app/views/results.html',
    controller: 'ResultController'
  })
  .otherwise({
    redirectTo: '/home'
  })

})
