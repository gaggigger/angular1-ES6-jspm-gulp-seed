import angular from 'angular';
import <%= camelCaseName %>Factory from './<%= name %>.factory';

let <%= name %>Module = angular.module('<%= name %>.factory', []);

<%= camelCaseName %>Factory.factory.$inject = ['$log', '$q'];
<%= name %>Module.factory('<%= camelCaseName %>Factory', <%= camelCaseName %>Factory.factory);

export default <%= name %>Module;
