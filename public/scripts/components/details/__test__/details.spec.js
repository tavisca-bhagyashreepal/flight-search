describe('Details', function() {
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
          subscriberName: 'detailsComponent',
        };
        ctrl = $componentController('detailsComponent', {$scope: $scope}, bindings);
    }));

    it('check if details component is defined', ()=>{
      expect(ctrl).toBeDefined();
    })

    it('check if flight list is present', ()=>{
      goTo('http://localhost:3000/#!/home');
      ctrl.$onInit();
      expect(ctrl.flightList.length>0).toBe(true);
    })

    it('check if flight search works', ()=>{
      goTo('http://localhost:3000/#!/home');
      ctrl.$onInit();
      ctrl.details = {
        origin_city : 'Pune',
        destination_city: 'Delhi',
        departure_date: '12/09/2017',
        return_date: '13/09/2017',
        seats_required:2,
        start_price: 1000,
        end_price: 8000
      }
      ctrl.filterList();
      expect(ctrl.flightListToDisplay.length>0).toBe(true);
      expect(ctrl.returnFlights.length>0).toBe(true);
    })

    /** Helper Functions **/
    function goTo(url) {
      $location.url(url);
      $rootScope.$digest();
    }
});
