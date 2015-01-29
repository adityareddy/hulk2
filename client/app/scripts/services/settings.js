'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:SidebarCtrl
 * @description
 * # SidebarCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
.factory('settings', ['$rootScope', function($rootScope) {
    // supported languages
    var settings = {
        layout: {
            pageSidebarClosed: false, // sidebar menu state
            pageBodySolid: true, // solid body color state
            pageAutoScrollOnLoad: 1000 // auto scroll to top on page load
        }
    };
    $rootScope.settings = settings;
    return settings;
}]);
