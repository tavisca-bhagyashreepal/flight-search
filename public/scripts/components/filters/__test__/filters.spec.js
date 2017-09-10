describe('Filters', function() {
    let $scope, $state, $stateParams, $q, $templateCache, $location, $rootScope, $injector, $component, $controller,$componentController, $compile, $httpBackend;
    let scope, element,ctrl;
    beforeEach(angular.mock.module('app'));
    beforeEach(inject(function (_$state_, _$stateParams_, _$q_, _$templateCache_, _$location_, _$rootScope_, _$injector_, _$controller_, _$compile_, _$componentController_, _$httpBackend_) {
        $rootScope = _$rootScope_;
        $injector = _$injector_;
        $controller = _$controller_;
        $compile = _$compile_;
        $componentController = _$componentController_;
        $httpBackend = _$httpBackend_;
        $location = _$location_;
        $scope = $rootScope.$new();
        let bindings = {
          subscriberName: 'filtersComponent',
        };
        ctrl = $componentController('filtersComponent', {$scope: $scope}, bindings);
    }));
    it('check if filters component is defined', ()=>{
      expect(ctrl).toBeDefined();
    })
    it('check if by default one way is selected', ()=>{
      goTo('http://localhost:3000/#!/home');
      ctrl.$onInit();
      expect(ctrl.oneway).toBe(true);
      expect(ctrl.twoway).toBe(false);
    })
    it('check after clicking return return is selected', ()=>{
      goTo('http://localhost:3000/#!/home');
      ctrl.$onInit();
      ctrl.toggleViews('twoway');
      expect(ctrl.twoway).toBe(true);
      expect(ctrl.oneway).toBe(false);
    })
    it('check after clicking oneway oneway is selected', ()=>{
      goTo('http://localhost:3000/#!/home');
      ctrl.$onInit();
      ctrl.toggleViews('oneway');
      expect(ctrl.oneway).toBe(true);
      expect(ctrl.twoway).toBe(false);
    })

    /** Helper Functions **/
    function goTo(url) {
      $location.url(url);
      $rootScope.$digest();
    }
});
