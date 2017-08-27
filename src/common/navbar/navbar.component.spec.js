describe('NavbarComponent', function () {

  beforeEach(angular.mock.module('vf-app'));

  describe('.currentState', function () {

    beforeEach(angular.mock.inject(function (_$state_, $rootScope, $componentController) {
      this._$state = _$state_;

      this.ctrl = $componentController('navbar', {
        $scope: $rootScope.$new(),
        $state: _$state_
      });
    }));

    it('it should have a title from state', function () {

      expect(this.ctrl.currentState).toBe(this._$state.current.title);
    });
  });

});