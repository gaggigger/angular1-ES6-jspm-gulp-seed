import template from './about.html!text';

let layoutAboutRoutes = function($stateProvider){

    $stateProvider
        .state('layoutHome.about', {
            url: '/about',
            views: {
                'content@layoutHome': {
                    template: template
                }
            }
        });
};

export default layoutAboutRoutes;
