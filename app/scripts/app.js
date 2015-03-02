'use strict';

/**
 * @ngdoc overview
 * @name testfolderApp
 * @description
 * # testfolderApp
 *
 * Main module of the application.
 */
angular
  .module('testfolderApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider, $locationProvider) {

    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      }).when('/:champion1/:champion2', {

        templateUrl: 'views/champion.html',
        controller: 'ChampCtrl'

      }).otherwise({
        redirectTo: '/'
      });
  });
