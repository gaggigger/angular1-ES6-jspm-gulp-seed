import angular from 'angular';
import Home from './view.home/ng';
import About from './view.about/ng';

let viewsModule = angular.module('app.views', [
	Home.name,
	About.name
]);

export default viewsModule;
