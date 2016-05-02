import angular from 'angular';
import 'angular-ui-router';
import layoutSupportRoutes from './_ng.routes';


layoutSupportRoutes.$inject = ['$stateProvider', '$urlRouterProvider'];

let layoutSupportModule = angular.module('layout.support', [
        'ui.router'
    ]).config(layoutSupportRoutes);

export default layoutSupportModule;
