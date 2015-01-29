'use strict';

describe('Controller: RechargeHistoryCtrl', function () {

  // load the controller's module
  beforeEach(module('clientApp'));

  var RechargeHistoryCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    RechargeHistoryCtrl = $controller('RechargeHistoryCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
