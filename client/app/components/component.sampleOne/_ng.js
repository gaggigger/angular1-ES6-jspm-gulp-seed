import angular from 'angular';
import 'angular-ui-router';
import sampleOneComponent from './sampleOne.component';
import johnPapaService from 'app/services/factory.johnPapa/_ng'
import angularES6Class from 'app/services/factory.angularES6Class/_ng'

let sampleOneModule = angular.module('component.sampleOne', [
	'ui.router',
	johnPapaService.name,
	angularES6Class.name
])
.directive('ixSampleOne', sampleOneComponent);

export default sampleOneModule;
