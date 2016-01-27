'use strict'

angular.module('hardees', [])
  .controller('hardeesCtrl', function($scope, $http) {
    $scope.meals = meals;
  });