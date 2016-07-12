angular.module('fantasyDragRace.auth', [])
.controller('AuthController', function($scope, $http) {

  $scope.login = function(user) {
    return $http({
      method: 'POST',
      url: '/api/users/login',
      type: 'application/json',
      data: JSON.stringify(user)
    }).then(function success(res) {
      console.log('Login Post Success')
    }, function error(res) {
      console.log('Login Post Error')
    })
  }

  $scope.signup = function(user) {
    return $http({
      method: 'POST',
      url: '/api/users/signup',
      type: 'application/json',
      data: JSON.stringify(user)
    }).then(function success(response) {
      console.log('Signup Post Success')
    }, function error(response) {
      console.log('Signup Post Error')
    })
  }
})