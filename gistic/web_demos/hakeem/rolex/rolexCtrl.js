'use strict'

angular.module('rolex', [])
  .controller('rolexCtrl', function($scope, $http) {
    $scope.watches = watches;
  });