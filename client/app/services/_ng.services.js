import angular from 'angular';
import User from './factory.user/_ng';
import AngularES6Class from './factory.angularES6Class/_ng';

let servicesModule = angular.module('app.services', [
    User.name,
    AngularES6Class.name
]);

export default servicesModule;
