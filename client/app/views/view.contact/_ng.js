import angular from 'angular';
import 'angular-ui-router';

import viewContactRoutes from './_routes';

viewContactRoutes.$inject = ['$stateProvider', '$urlRouterProvider'];

let viewContactModule = angular.module('view.contact', [
	'ui.router'
])
.config(viewContactRoutes);

export default viewContactModule;
