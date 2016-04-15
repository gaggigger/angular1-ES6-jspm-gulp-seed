import angular from 'angular';
import 'angular-ui-router';

import viewAboutRoutes from './view.about.routes';

viewAboutRoutes.$inject = ['$stateProvider'];

let viewHomeModule = angular.module('view.about', [
	'ui.router'
])
.config(viewAboutRoutes);

export default viewHomeModule;
