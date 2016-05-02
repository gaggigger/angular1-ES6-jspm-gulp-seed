import angular from 'angular';
import 'angular-ui-router';
import heroComponent from './_ng.component';

let heroModule = angular.module('hero', [
	'ui.router'
])
.directive('hero', heroComponent);

export default heroModule;
