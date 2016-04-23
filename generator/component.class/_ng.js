import angular from 'angular';
import 'angular-ui-router';
import <%= name %>Component from './<%= name %>.component';

// BEGIN IMPORT MODULE DEPENDENCIES

// Relative paths must be mapped from the client directory.
// For example:
// import someService from '../../../app/services/factory.angularES6Class/_ng
// or
// import someService from 'app/services/factory.angularES6Class/_ng

// END IMPORT MODULE DEPENDENCIES

let <%= name %>Module = angular.module('<%= name %>', [
	'ui.router'
	// someService.name
])
.directive('<%= name %>', <%= name %>Component);

export default <%= name %>Module;
