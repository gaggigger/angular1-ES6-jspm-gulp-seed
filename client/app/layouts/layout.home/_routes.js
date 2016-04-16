import template from './home.html!text';
import './home.css!';

let layoutHomeRoutes = function($stateProvider, $urlRouterProvider){

    // $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('layoutHome', {
            url: '',
            template: template,
            redirectTo: 'layoutHome.home'
        });
};

export default layoutHomeRoutes;
