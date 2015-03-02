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

    $locationProvider.html5Mode(true);

    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/user/login', {
        templateUrl: 'views/user/login.html',
        controller: 'LoginCtrl'
      }).when('/user/signup', {

        templateUrl: 'views/user/signup.html',
        controller: 'SignupCtrl'

      }).otherwise({
        redirectTo: '/'
      });
  });
