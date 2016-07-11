angular.module('fantasyDragRace.select', [])
.controller('SelectController', function($scope, $window) {
  // will fill this out at a later point if I have enough time...
  $scope.selection = 'hello there'
  $scope.newSelection = 'try this again'
  $scope.submitTest = function(target) {
    $scope.selection = target
  }
})