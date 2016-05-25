import angular from 'angular';
import config from './_ng.config';

let heroModule = angular.module('hero', [
    'config.translation'
]);

config.$inject = ['$translateProvider'];
heroModule.config(config);

export default heroModule;
