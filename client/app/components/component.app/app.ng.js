import angular from 'angular';
import 'angular-ui-router';
import Views from '../../views/views';
import Components from '../../components/components';
import Services from '../../services/services'
import LayoutHome from '../../layouts/layout.home/layout.home.ng';
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
