import template from './layout.home.html!text';

let layoutHomeRoutes = function($stateProvider, $urlRouterProvider){

    // $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('layoutHome', {
            url: '',
            template: template,
            redirectTo: 'layoutHome.home'
        });
};

export default layoutHomeRoutes;
