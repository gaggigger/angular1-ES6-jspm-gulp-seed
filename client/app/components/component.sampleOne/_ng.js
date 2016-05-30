import angular from 'angular';
import 'angular-ui-router';
import {sampleOneComponent, modelFactory} from './_ng.component';
import johnPapaService from '../../services/factory.johnPapa/_ng';
import angularES6Class from '../../services/factory.angularES6Class/_ng';

let sampleOneModule = angular.module('component.sampleOne', [
    'ui.router',
    johnPapaService.name,
    angularES6Class.name
])
    .directive('ixSampleOne', sampleOneComponent)
    .factory('ixSampleOneModel', modelFactory);

export default sampleOneModule;
