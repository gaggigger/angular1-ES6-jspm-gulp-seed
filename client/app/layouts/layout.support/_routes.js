import template from './support.html!text';
import './support.css!';

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
