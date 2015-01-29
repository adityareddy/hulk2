'use strict';

/**
 * @ngdoc overview
 * @name clientApp
 * @description
 * # clientApp
 *
 * Main module of the application.
 */
angular
  .module('clientApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
		'ui.bootstrap',
		'ui.router'
  ]).config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise("/");
  $stateProvider
    .state('main', {
      url: "/",
      templateUrl: "views/main.html",
			controller: 'MainCtrl'
    })
	  .state('profile', {
      url: "/profile",
      templateUrl: "views/profile.html",
			controller: 'ProfileCtrl'
    })
	  .state('rechargeHistory', {
      url: "/recharge_history",
      templateUrl: "views/recharge_history.html",
			controller: 'RechargeHistoryCtrl'
    })
    .state('about', {
      url: "/about",
      templateUrl: "views/about.html",
			controller: 'AboutCtrl'
    });
}).run(["$rootScope", "settings", "$state", function($rootScope, settings, $state) {
    $rootScope.$state = $state; // state to be accessed from view
		console.log($state.get());
}]);

/*  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/profile', {
        templateUrl: 'views/profile.html',
        controller: 'ProfileCtrl'
      })
      .when('/recharge_history', {
        templateUrl: 'views/recharge_history.html',
        controller: 'RechargeHistoryCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });*/