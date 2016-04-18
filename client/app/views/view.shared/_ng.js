import angular from 'angular';
import 'angular-ui-router';

import viewSharedRoutes from './_routes';

viewSharedRoutes.$inject = ['$stateProvider', '$urlRouterProvider'];

let viewSharedModule= angular.module('view.shared', [
	'ui.router'
])
.config(viewSharedRoutes);

export default viewSharedModule;
