import angular from 'angular';
import 'angular-ui-router';

import viewSupportRoutes from './_routes';

viewSupportRoutes.$inject = ['$stateProvider', '$urlRouterProvider'];

let viewSupportModule = angular.module('view.support', [
	'ui.router'
])
.config(viewSupportRoutes);

export default viewSupportModule;
