import angular from 'angular';
import <%= camelCaseName %>Factory from './<%= name %>.factory';

let <%= camelCaseName %>Module = angular.module('<%= name %>', []);

<%= camelCaseName %>Factory.factory.$inject = ['$log'];
<%= camelCaseName %>Module.factory('<%= camelCaseName %>Factory', <%= camelCaseName %>Factory.factory);

export default <%= camelCaseName %>Module;
