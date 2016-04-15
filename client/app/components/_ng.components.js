import angular from 'angular';
import SampleOne from './component.sampleOne/_ng';
import SampleTwo from './component.sampleTwo/_ng';
import Hero from './component.hero/_ng';
import NavBar from './component.navbar/_ng';

let componentModule = angular.module('app.components', [
    SampleOne.name,
    SampleTwo.name,
    Hero.name,
    NavBar.name
]);

export default componentModule;
