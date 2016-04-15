import angular from 'angular';
import User from './factory.user/_ng';

let servicesModule = angular.module('app.services', [
    User.name
]);

export default servicesModule;
