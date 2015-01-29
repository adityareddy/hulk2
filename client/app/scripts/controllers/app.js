'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:AppCtrl
 * @description
 * # AppCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('AppCtrl', function ($scope, $rootScope) {
    $scope.$on('$viewContentLoaded', function() {
        Metronic.initComponents(); // init core components
    });
  });
