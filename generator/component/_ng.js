import angular from 'angular';
import 'angular-ui-router';
import {<%= name %>Component, <%= name %>ModelFactory} from './_ng.component';

// BEGIN IMPORT MODULE DEPENDENCIES

// Relative paths must be mapped from the client directory.
// For example:
// import someService from '../../../app/services/factory.angularES6Class/_ng
// or
// import someService from 'app/services/factory.angularES6Class/_ng

// END IMPORT MODULE DEPENDENCIES

let <%= name %>Module = angular.module('<%= name %>.component', [
	'ui.router'
	// someService.name
])
	.directive('<%= name %>', <%= name %>Component)
	.factory('<%= name %>Model', <%= name %>ModelFactory);

export default <%= name %>Module;
