import angular from 'angular';
import User from './user/user.ng';

let servicesModule = angular.module('app.services', [
    User.name
]);

export default servicesModule;
