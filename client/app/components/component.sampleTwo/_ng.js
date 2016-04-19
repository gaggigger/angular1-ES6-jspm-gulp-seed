import angular from 'angular';
import 'angular-ui-router';
import sampleTwoComponent from './sampleTwo.component';
import johnPapaService from 'app/services/factory.johnPapa/_ng'
import angularES6Class from 'app/services/factory.angularES6Class/_ng'

let sampleTwoModule = angular.module('component.sampleTwo', [
	'ui.router',
	johnPapaService.name,
	angularES6Class.name
])
.directive('ixSampleTwo', sampleTwoComponent);

export default sampleTwoModule;
