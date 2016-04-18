import controller from './shared.controller';
import template from './shared.html!text';

let layoutHomeRoutes = function($stateProvider){
    
    $stateProvider
        .state('layoutSupport.shared', {
            url: '/home/shared',
            views: {
                'content@layoutSupport': {
                    template: template,
                    controller: controller,
                    controllerAs: 'vm',
                    indToController: true
                }
            }
        });

    $stateProvider
        .state('layoutHome.shared', {
            url: '/support/shared',
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
