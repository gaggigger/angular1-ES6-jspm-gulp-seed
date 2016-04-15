import angular from 'angular';
import Home from './view.home/_ng';
import About from './view.about/_ng';
import Support from './view.support/_ng';

let viewsModule = angular.module('app.views', [
	Home.name,
	About.name,
	Support.name
]);

export default viewsModule;
