import angular from 'angular';
import 'angular-ui-router';

import viewAboutRoutes from './_ng.routes';

viewAboutRoutes.$inject = ['$stateProvider'];

let viewHomeModule = angular.module('view.about', [
	'ui.router'
])
.config(viewAboutRoutes);

export default viewHomeModule;
