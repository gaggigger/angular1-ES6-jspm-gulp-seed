import template from './navbarHome.html!text';
import controller from './navbarHome.controller';
import './navbarHome.css!';

let navbarComponent = function(){
	return {
		template,
		controller,
		restrict: 'E',
		controllerAs: 'vm',
		scope: {},
		bindToController: true
	};
};

export default navbarComponent;
