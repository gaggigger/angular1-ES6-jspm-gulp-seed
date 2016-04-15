import angular from 'angular';
import 'angular-ui-router';
import sampleTwoComponent from './sampleTwo.component';

let sampleTwoModule = angular.module('component.sampleTwo', [
	'ui.router'
])
.directive('ixSampleTwo', sampleTwoComponent);

export default sampleTwoModule;
