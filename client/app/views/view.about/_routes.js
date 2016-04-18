import controller from './about.controller';
import template from './about.html!text';

controller.$inject = ['$log'];

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

    // flowProvider.flow({
    //     layout: 'layoutHome',
    //     uiView: 'content',
    //     state: {
    //         name: 'about',
    //         url: '/about',
    //         template: template,
    //         controller: controller,
    //         controllerAs: 'vm',
    //         indToController: true
    //     }
    //
    // });
};

export default layoutAboutRoutes;
