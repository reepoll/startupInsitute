'use strict';

/**
 * @ngdoc function
 * @name testFoundationApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the testFoundationApp
 */
angular.module('testFoundationApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
