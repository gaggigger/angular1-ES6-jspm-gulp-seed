import controller from './contact.controller';
import template from './contact.html!text';

let layoutHomeRoutes = function($stateProvider){
    
    $stateProvider
        .state('layoutSupport.contact', {
            url: '/contact',
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
