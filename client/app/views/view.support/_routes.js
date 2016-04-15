import template from './support.html!text';

let layoutHomeRoutes = function($stateProvider, $urlRouterProvider){

    // $urlRouterProvider.otherwise('/home');

    $stateProvider
        .state('layoutSupport.support', {
            url: '/support',
            views: {
                'content@layoutSupport': {
                    template: template
                }
            }
        });
};

export default layoutHomeRoutes;
