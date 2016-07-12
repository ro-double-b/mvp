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
  })  
  .when('/home', {
    templateUrl: 'app/views/home.html',
    controller: 'HomeController'
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
.factory('RenderResults', function($http) {
  return $http({
    method: 'GET',
    url: '/api/selection', 
  }).then(function success(response) {
    console.log('congrats you got your get response back to the factory man')
  }, function error(response) {
    console.log('bummer man you failed to get your response back in an orderly fashion.  go directly to jail do not pass go, hiiiiii')
  })
})
