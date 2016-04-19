import angular from 'angular';
import Home from './view.home/_ng';
import About from './view.about/_ng';
import Support from './view.johnPapa/_ng';
import Contact from './view.contact/_ng';
import Shared from './view.shared/_ng';


let viewsModule = angular.module('app.views', [
	Home.name,
	About.name,
	Support.name,
	Contact.name,
	Shared.name
]);

export default viewsModule;
