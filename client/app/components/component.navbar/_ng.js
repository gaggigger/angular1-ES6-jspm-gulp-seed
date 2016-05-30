import angular from 'angular';
import 'angular-ui-router';
import navbarComponent from './_ng.component';
import config from './_ng.config';

let navbarModule = angular.module('component.navbar', [
	'ui.router',
	'config.translation'
]);
config.$inject = ['$translateProvider'];
navbarModule.config(config);

navbarModule.directive('navbar', navbarComponent);

export default navbarModule;
