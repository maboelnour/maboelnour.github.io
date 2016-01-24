'use strict'

angular.module('skechers', [])
  .controller('skechersCtrl', function($scope, $http) {
    $scope.products = products;
  });