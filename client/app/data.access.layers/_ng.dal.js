import angular from 'angular';
import NOAA from './dal.noaa/_ng';

let dalModule = angular.module('app.dal', [
    NOAA.name
]);

export default dalModule;
