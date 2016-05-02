import angular from 'angular';
import 'angular-ui-router';
import navbarComponent from './_ng.component';

let navbarModule = angular.module('component.navbar', [
	'ui.router'
])
.directive('navbar', navbarComponent);

export default navbarModule;
