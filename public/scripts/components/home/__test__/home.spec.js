describe('Home', function() {
    let $scope, $state, $stateParams, $q, $templateCache, $location, $rootScope, $injector, $component, $controller,$componentController, $compile, $httpBackend;
    let scope, element,ctrl;
    beforeEach(angular.mock.module('app'));
    beforeEach(inject(function (_$state_, _$stateParams_, _$q_, _$templateCache_, _$location_, _$rootScope_, _$injector_, _$controller_, _$compile_, _$componentController_, _$httpBackend_) {
        $rootScope = _$rootScope_;
        $injector = _$injector_;
        $controller = _$controller_;
        $compile = _$compile_;
        $componentController = _$componentController_;
        $scope = $rootScope.$new();

    }));
    it('check if home component is defined', ()=>{
      let bindings = {
        subscriberName: 'homeComponent',
      };
      ctrl = $componentController('homeComponent', {$scope: $scope}, bindings);
      expect(ctrl).toBeDefined();
    });
    it('check if filters component is defined', ()=>{
      let bindings = {
        subscriberName: 'filtersComponent',
      };
      ctrl = $componentController('filtersComponent', {$scope: $scope}, bindings);
      expect(ctrl).toBeDefined();
    })
    it('check if details component is defined', ()=>{
      let bindings = {
        subscriberName: 'detailsComponent',
      };
      ctrl = $componentController('detailsComponent', {$scope: $scope}, bindings);
      expect(ctrl).toBeDefined();
    })
});
