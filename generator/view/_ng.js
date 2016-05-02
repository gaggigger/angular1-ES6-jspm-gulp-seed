import angular from 'angular';
import 'angular-ui-router';

import view<%= name %>Routes from './_ng.routes';

view<%= name %>Routes.$inject = ['$stateProvider'];

let view<%= name %>Module = angular.module('view.<%= name %>', [
	'ui.router'
])
.config(view<%= name %>Routes);

export default view<%= name %>Module;
