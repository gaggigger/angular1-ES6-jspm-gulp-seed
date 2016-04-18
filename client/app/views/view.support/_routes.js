import controller from './support.controller';
import template from './support.html!text';

let layoutHomeRoutes = function($stateProvider){

    $stateProvider
        .state('layoutSupport.support', {
            url: '/support',
            views: {
                'content@layoutSupport': {
                    template: template,
                    controller: controller,
                    controllerAs: 'vm',
                    indToController: true
                }
            }
        });
};

export default layoutHomeRoutes;
