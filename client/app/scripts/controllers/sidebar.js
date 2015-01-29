'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:SidebarCtrl
 * @description
 * # SidebarCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('SidebarCtrl', function ($scope) {
    $scope.$on('$includeContentLoaded', function() {
        Layout.initSidebar(); // init sidebar
    });
  });
