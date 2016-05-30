import controller from './home.controller';
import template from './home.html!text';

let layoutHomeRoutes = function($stateProvider, $urlRouterProvider){

    $urlRouterProvider.otherwise('/home');

    $stateProvider
        .state('layoutHome.home', {
            url: '',
            views: {
                'content@layoutHome': {
                    template: template,
                    controller: controller,
                    controllerAs: 'vm',
                    bindToController: true
                }
            }
        });
};

export default layoutHomeRoutes;
