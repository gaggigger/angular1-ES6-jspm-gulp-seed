import angular from 'angular';
import 'angular-ui-router';
import layout<%= InitialCaseName %>Routes from './_routes';

layout<%= InitialCaseName %>Routes.$inject = ['$stateProvider', '$urlRouterProvider'];

let layout<%= InitialCaseName %>Module = angular.module('layout.<%= name %>', [
        'ui.router'
    ]).config(layout<%= InitialCaseName %>Routes);

export default layout<%= InitialCaseName %>Module;
