import angular from 'angular';
import SampleOne from './component.sampleOne/ng';
import SampleTwo from './component.sampleTwo/ng';

let componentModule = angular.module('app.components', [
    SampleOne.name,
    SampleTwo.name
]);

export default componentModule;
