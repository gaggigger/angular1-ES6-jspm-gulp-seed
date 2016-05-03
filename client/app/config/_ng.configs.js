import angular from 'angular';
import configTranslate from './config.translation/_ng'

let layoutModule = angular.module('app.configs', [
    configTranslate.name
]);

export default layoutModule;
