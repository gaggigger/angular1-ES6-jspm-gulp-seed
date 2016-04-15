import angular from 'angular';
import 'angular-ui-router';
import sampleOneComponent from './sampleOne.component';

let sampleOneModule = angular.module('component.sampleOne', [
	'ui.router'
])
.directive('ixSampleOne', sampleOneComponent);

export default sampleOneModule;
