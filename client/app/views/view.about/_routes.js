import controller from './about.controller';
import template from './about.html!text';

let layoutAboutRoutes = function($stateProvider){

    $stateProvider
        .state('layoutHome.about', {
            url: '/about',
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

export default layoutAboutRoutes;
