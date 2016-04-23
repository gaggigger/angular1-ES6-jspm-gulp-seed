import controller from './sampleOne.controller';
import Model from './model/sampleOne.model';
import template from './sampleOne.html!text';
import './sampleOne.css!';

controller.$inject = ['$scope', 'ixSampleOneModel'];
export function sampleOneComponent(){
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
}

modelFactory.$inject = ['$log', '$q', 'angularES6Class', 'johnPapaService'];
export function modelFactory($log, $q, angularES6Class, johnPapaService) {

	var service = {
		get: getModel
	};

	var singletons = {};

	function getModel(componentId) {
		if (!singletons[componentId]) {
			singletons[componentId] = new Model(componentId, $log, $q, angularES6Class, johnPapaService);
		}
		
		return singletons[componentId];
	}

	return service;

}
