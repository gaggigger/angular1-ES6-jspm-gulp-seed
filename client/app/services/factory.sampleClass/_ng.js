import angular from 'angular';
import SampleClassFactory from './sampleClass.factory';

SampleClassFactory.factory.$inject = ['$log', '$timeout'];

let sampleClassModule = angular.module('factory.sampleClass', [])
    .factory('sampleClassService', SampleClassFactory.factory);

export default sampleClassModule
