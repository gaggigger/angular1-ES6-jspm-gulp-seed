import angular from 'angular';
import SampleOne from './component.sampleOne/sampleOne.ng';
import SampleTwo from './component.sampleTwo/sampleTwo.ng';
import Hero from './hero/hero.ng';
import NavBar from './navbar/navbar.ng';

let componentModule = angular.module('app.components', [
    SampleOne.name,
    SampleTwo.name,
    Hero.name,
    NavBar.name
]);

export default componentModule;
