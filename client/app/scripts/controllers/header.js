'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:HeaderCtrl
 * @description
 * # HeaderCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('HeaderCtrl', function ($scope) {
    $scope.$on('$includeContentLoaded', function() {
        Layout.initHeader(); // init header
    });
  });
