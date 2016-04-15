import angular from 'angular';
import 'angular-ui-router';
import sampleTwoComponent from './sampleTwo.component';

let aboutModule = angular.module('component.sampleTwo', [
	'ui.router'
])
.directive('ixSampleTwo', sampleTwoComponent);

export default aboutModule;
