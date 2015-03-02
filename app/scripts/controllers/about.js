'use strict';

/**
 * @ngdoc function
 * @name testfolderApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the testfolderApp
 */
angular.module('testfolderApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
