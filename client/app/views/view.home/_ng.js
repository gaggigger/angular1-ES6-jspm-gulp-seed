import angular from 'angular';
import 'angular-ui-router';

import viewHomeRoutes from './_routes';

viewHomeRoutes.$inject = ['$stateProvider', '$urlRouterProvider'];

let viewHomeModule = angular.module('view.home', [
	'ui.router'
])
.config(viewHomeRoutes);

export default viewHomeModule;
