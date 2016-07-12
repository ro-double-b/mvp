angular.module('fantasyDragRace.select', [])
.controller('SelectController', function($scope, $http, $window) {
  // will fill this out at a later point if I have enough time...
  $scope.selection = 'hello there'
  $scope.newSelection = 'try this again'
  $scope.submitTest = function(target) {
    $scope.selection = target
  }

  $scope.submit = function(selection) {
    var data = {
      selection_user_id: window.user,
      selection_queen_id: selection,
      selection_week_id: window.week
    }
    return $http({
      method: 'POST',
      url: '/api/selection',
      type:'application/json',
      data: data
    }).then(function success(response) {
      console.log('Submit Post Success')
    }, function error(response) {
      console.log('Submit Post Error')
    })
  }
})