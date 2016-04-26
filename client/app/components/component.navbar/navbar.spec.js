// Have to import angular first before angular-mocks
// https://github.com/Workiva/karma-jspm/issues/23
import angular from 'angular';
import 'angular-mocks';
import NavbarModule from './_ng';
import NavbarController from './navbar.controller';
import NavbarComponent from './navbar.component';
import NavbarTemplate from './navbar.html!text';

describe('Navbar Component', ()=>{
	let $rootScope,
	makeController;

	beforeEach(angular.mock.module(NavbarModule.name));
	beforeEach(angular.mock.inject((_$rootScope_)=>{
		$rootScope = _$rootScope_;
		makeController = ()=> new NavbarController();
	}));

	describe('Module', ()=>{
		// test things about the component module
		// checking to see if it registers certain things and what not
		// test for best practices with naming too
		// test for routing
	});

	describe('Controller', ()=>{
		// test your controller here

		it('should have a name property [REMOVE]', ()=>{ // erase me if you remove this.name from the controller
			let controller = makeController();
			expect(controller.name).toEqual(jasmine.anything());
		});
	});

	describe('Template', ()=>{
		// test the template
		// use Regexes to test that you are using the right bindings {{  }}

		it('should layoutHome.home in template [REMOVE]', ()=>{
			expect(NavbarTemplate).toEqual(jasmine.stringMatching(/\s?layoutHome\.home\s?/g));
		});
	});


	describe('Component', ()=>{
			// test the component/directive itself
			let component = NavbarComponent();

			it('should use the right template',()=>{
				expect(component.template).toEqual(NavbarTemplate);
			});

			it('should use controllerAs', ()=>{
				expect(component.controllerAs).toEqual(jasmine.anything());
			});

			it('should use the right controller', ()=>{
				expect(component.controller).toEqual(NavbarController);
			});
	});
});






