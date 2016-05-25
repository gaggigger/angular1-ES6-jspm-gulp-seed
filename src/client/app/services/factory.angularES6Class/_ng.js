import angular from 'angular';
import SampleClassFactory from './angularES6Class.factory';

SampleClassFactory.factory.$inject = ['$log', '$timeout'];

let sampleClassModule = angular.module('factory.angularES6Class', [])
    .factory('angularES6Class', SampleClassFactory.factory);

export default sampleClassModule
