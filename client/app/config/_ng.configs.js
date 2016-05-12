import angular from 'angular';
// import configTranslate from '@uiuxengineering/uidk-ng-1x-translation';
import configTranslate from 'UIUXEngineering/uidk-ng-1x-translation';
// import configTranslate from './config.translation/_ng';

let layoutModule = angular.module('app.configs', [
    configTranslate.name
]);

export default layoutModule;
