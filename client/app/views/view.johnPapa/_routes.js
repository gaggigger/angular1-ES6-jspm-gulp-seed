import controller from './johnPapa.controller';
import template from './johnPapa.html!text';

// (function () {
//     "use strict";

// angular
//     .module('app')
//     .config(routesConfig);

// routesConfig.$inject = ['$stateProvider'];

/* istanbul ignore next */
export default function routesConfig($stateProvider) {

    $stateProvider
        .state('layoutSupport.support', {
            url: '',
            views: {
                'content@layoutSupport': {
                    template: template,
                    controller: controller,
                    controllerAs: 'vm',
                    bindToController: true
                }
            }
        });

}
// })();

