import controller from './shared.controller';
import template from './shared.html!text';

let layoutHomeRoutes = function($stateProvider){

    let views = {
        template: template,
        controller: controller,
        controllerAs: 'vm',
        bindToController: true
    };

    $stateProvider
        .state('layoutSupport.shared', {
            url: '/shared',
            views: {
                'content@layoutSupport': views
            }
        });

    $stateProvider
        .state('layoutHome.shared', {
            url: '/shared',
            views: {
                'content@layoutHome': views
            }
        });


};

export default layoutHomeRoutes;
