import angular from 'angular';
import 'angular-ui-router';
import Common from '../common/common';
import Views from '../views';
import LayoutHome from './layout.home/ng';
import Components from '../components';
import AppComponent from './app.component';

let appModule = angular.module('app', [
    'ui.router',
    Common.name,
    Views.name,
    LayoutHome.name,
    Components.name
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
