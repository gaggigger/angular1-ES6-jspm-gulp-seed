import template from './shared.html!text';

let layoutHomeRoutes = function($stateProvider, $urlRouterProvider){

    // $urlRouterProvider.otherwise('/home');

    $stateProvider
        .state('layoutSupport.shared', {
            url: '/home/shared',
            views: {
                'content@layoutSupport': {
                    template: template
                }
            }
        });

    $stateProvider
        .state('layoutHome.shared', {
            url: '/support/shared',
            views: {
                'content@layoutHome': {
                    template: template
                }
            }
        });
};

export default layoutHomeRoutes;
