import template from './support.html!text';

let layoutSupportRoutes = function($stateProvider, $urlRouterProvider){

    // $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('layoutSupport', {
            url: '',
            template: template,
            redirectTo: 'layoutSupport.support'
        });
};

export default layoutSupportRoutes;
