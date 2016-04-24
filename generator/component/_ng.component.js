import controller from './<%= name %>.controller';
import Model from './model/<%= name %>.model';
import template from './<%= name %>.html!text';
import './<%= name %>.css!';

controller.$inject = ['$scope', '$log', '<%= name %>Model'];

export function <%= name %>Component(){
	return {
		template,
		controller,
		restrict: 'E',
		controllerAs: 'vm',
        scope: {
            componentId: '@'
        },
		bindToController: true
	};
};

<%= name %>ModelFactory.$inject = ['$log', '$q'];
export function <%= name %>ModelFactory($log, $q) {

    var service = {
        get: getModel
    };

    var singletons = {};

    function getModel(componentId) {
        if (!singletons[componentId]) {
            singletons[componentId] = new Model(componentId, $log, $q);
        }

        return singletons[componentId];
    }

    return service;
}
