import angular from 'angular';
import 'angular-ui-router';
import layoutHomeRoutes from './routes';


layoutHomeRoutes.$inject = ['$stateProvider', '$urlRouterProvider'];

let layoutHomeModule = angular.module('layout.home', [
        'ui.router'
    ]).config(layoutHomeRoutes);

export default layoutHomeModule;
