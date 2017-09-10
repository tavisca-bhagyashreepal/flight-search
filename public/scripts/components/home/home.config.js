function HomeConfig($stateProvider, $urlRouterProvider) {
    'ngInject';
    $stateProvider
        .state('home', {
            url: '/home',
            //abstract: true,
            views: {
                mainview: {
                    template: '<home-component subscriber-name="homeComponent" ></home-component>'
                }
            }
        });
}
export default HomeConfig;
