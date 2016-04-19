import angular from 'angular';
import Hero from './component.hero/_ng';
import NavBarHome from './component.navbar/_ng';

import SampleOne from './component.sampleOne/_ng';
import SampleTwo from 'UIDK/components/component.sampleTwo/_ng';

let componentModule = angular.module('app.components', [
    SampleOne.name,
    SampleTwo.name,
    Hero.name,
    NavBarHome.name
]);

export default componentModule;
