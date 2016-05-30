import angular from 'angular';
import 'angular-ui-router';
import Views from '../../views/_ng.views';
import Components from '../../components/_ng.components';
import Services from '../../services/_ng.services';
import LayoutHome from '../../layouts/_ng.layouts';
import configs from '../../config/_ng.configs';
import AppComponent from './_ng.component';

let appModule = angular.module('app', [
    'ui.router',
    Views.name,
    Components.name,
    Services.name,
    LayoutHome.name,
    configs.name
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
