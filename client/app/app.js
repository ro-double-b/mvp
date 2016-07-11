angular.module('fantasyDragRace', ['ngRoute'])
.config(function($routeProvider) {
  $routeProvider
  .when('/sigin', {
    templateurl: 'app/views/sigin.html'
  })
  .when('/login', {
    templateurl: 'app/views/login.html'
  })
  .otherwise({
    redirectTo: '/'
  })

})
