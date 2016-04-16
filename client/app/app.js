// Load Angular libraries

import angular from 'angular';
import 'angular-ui-router';
import 'angular-animate';

// Load CSS
import 'normalize.css';
// Contains Roboto font required by angular material
import '../styles/global.css!';

/**
 * app directive that contains the whole application.
 */
import appModule from './components/_component.app/_ng';

/**
 * As we are using ES6 with Angular 1.x we can't use ng-app directive
 * to bootstrap the application as modules are loaded asynchronously.
 * Instead, we need to bootstrap the application manually
 */
var container = document.getElementById('app-container');
var noAngularDOM;

angular.element(document).ready(() => {

    //Start of hot-reloader code. Remove in production
    if (window.System && location.origin.match(/localhost/)) {
        System.trace = true;
        noAngularDOM = container.cloneNode(true);
        if ((!System.hotReloader)) {
            System.import('systemjs-hot-reloader').then(HotReloader => {
                System.hotReloader = new HotReloader.default('http://localhost:8081/');
                System.hotReloader.on('change', function(name) {
                    console.log(name, 'changed')
                })
            })
        }
    }
    // End of hot reloader code
    angular.bootstrap(container, [
        appModule.name,
        'ngAnimate'], {
        strictDi: true
    });
});

export default appModule;
export function __unload() {
    container = document.getElementById('app-container');
    container.remove();
    document.body.appendChild(noAngularDOM.cloneNode(true));
}
