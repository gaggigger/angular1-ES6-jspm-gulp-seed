import angular from 'angular';
import 'angular-ui-router';
import './johnPapa.css!';

import viewJohnPapaRoutes from './routes';

let viewJohnPapa = angular.module('view.johnPapa', [
	'ui.router'
])
.config(viewJohnPapaRoutes);

export default viewJohnPapa;
