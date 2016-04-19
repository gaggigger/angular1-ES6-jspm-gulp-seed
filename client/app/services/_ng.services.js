import angular from 'angular';
import User from './factory.user/_ng';
import SampleClassFactory from './factory.sampleClass/_ng';

let servicesModule = angular.module('app.services', [
    User.name,
    SampleClassFactory.name
]);

export default servicesModule;
