import template from './sampleTwo.html!text';
import controller from './sampleTwo.controller';
import './sampleTwo.css!';

controller.$inject = ['$log', 'sampleClassService'];

let aboutComponent = function(){
	return {
		template,
		controller,
		restrict: 'E',
		controllerAs: 'vm',
		scope: {},
		bindToController: true
	};
};


export default aboutComponent;
