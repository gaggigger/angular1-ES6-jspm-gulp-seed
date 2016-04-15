import template from './home.html!text';

let layoutHomeRoutes = function($stateProvider, $urlRouterProvider){

    $urlRouterProvider.otherwise('/home');

    $stateProvider
        .state('layoutHome.home', {
            url: '/home',
            views: {
                'content@layoutHome': {
                    template: template
                }
            }
        });
};

export default layoutHomeRoutes;
