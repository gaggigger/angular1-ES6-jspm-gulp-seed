import controller from './sampleOne.controller';
import template from './sampleOne.html!text';
import './sampleOne.css!';

controller.$inject = ['$log', 'sampleClassService'];

/**
 * This is the Home Component.
 */
let sampleOneComponent = function(){
	return {
		template,
		controller,
		restrict: 'E',
		controllerAs: 'vm',
		scope: {},
		bindToController: true
	};
};

export default sampleOneComponent;
