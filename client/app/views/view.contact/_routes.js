import template from './contact.html!text';

let layoutHomeRoutes = function($stateProvider, $urlRouterProvider){

    // $urlRouterProvider.otherwise('/home');

    $stateProvider
        .state('layoutSupport.contact', {
            url: '/contact',
            views: {
                'content@layoutSupport': {
                    template: template
                }
            }
        });
};

export default layoutHomeRoutes;
