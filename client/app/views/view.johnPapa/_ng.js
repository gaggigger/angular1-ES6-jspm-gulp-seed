import angular from 'angular';
import 'angular-ui-router';
import './johnPapa.css!';

import viewJohnPapaRoutes from './_routes';

viewJohnPapaRoutes.$inject = ['$stateProvider'];

let viewJohnPapa = angular.module('view.johnPapa', [
	'ui.router'
])
.config(viewJohnPapaRoutes);

export default viewJohnPapa;
