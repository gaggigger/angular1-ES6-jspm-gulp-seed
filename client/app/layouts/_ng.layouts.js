import angular from 'angular';
import LayoutHome from './layout.home/_ng';
import SupportLayout from './layout.support/_ng';

let layoutModule = angular.module('app.layouts', [
    LayoutHome.name,
    SupportLayout.name
]);

export default layoutModule;
