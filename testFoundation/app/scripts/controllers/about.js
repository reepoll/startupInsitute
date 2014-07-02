'use strict';

/**
 * @ngdoc function
 * @name testFoundationApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the testFoundationApp
 */
angular.module('testFoundationApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
