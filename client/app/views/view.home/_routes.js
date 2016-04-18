import controller from './home.controller';
import template from './home.html!text';

let layoutHomeRoutes = function($stateProvider, $urlRouterProvider){

    $urlRouterProvider.otherwise('/home');

    $stateProvider
        .state('layoutHome.home', {
            url: '/home',
            views: {
                'content@layoutHome': {
                    template: template,
                    controller: controller,
                    controllerAs: 'vm',
                    indToController: true
                }
            }
        });
};

export default layoutHomeRoutes;
