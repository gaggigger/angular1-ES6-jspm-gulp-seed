import angular from 'angular';
import 'angular-ui-router';
import navbarComponent from './navbarHome.component';

let navbarModule = angular.module('component.navbarHome', [
	'ui.router'
])
.directive('navbarHome', navbarComponent);

export default navbarModule;
