import angular from 'angular';
import 'angular-ui-router';
import heroComponent from './_ng.component';
import config from './_ng.config';

let heroModule = angular.module('hero', [
	'ui.router',
	'config.translation'
]);

config.$inject = ['$translateProvider'];
heroModule.config(config);
heroModule.directive('hero', heroComponent);

export default heroModule;
