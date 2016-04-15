import angular from 'angular';
import 'angular-ui-router';
import Views from '../../views/_ng.views';
import Components from '../../components/_ng.components';
import Services from '../../services/_ng.services'
import LayoutHome from '../../layouts/_ng.layouts';
import AppComponent from './app.component';

let appModule = angular.module('app', [
    'ui.router',
    Views.name,
    Components.name,
    Services.name,
    LayoutHome.name
]).run(['$rootScope', '$state', function($rootScope, $state) {
        $rootScope.$on('$stateChangeStart', function(evt, to, params) {
            if (to.redirectTo) {
                evt.preventDefault();
                $state.go(to.redirectTo, params);
            }
        });
    }])
    .directive('app', AppComponent);

export default appModule;
