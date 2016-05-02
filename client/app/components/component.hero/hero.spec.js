// Have to import angular first before angular-mocks
// https://github.com/Workiva/karma-jspm/issues/23
import angular from 'angular';
import 'angular-mocks';
import HeroModule from './_ng';
import HeroController from './hero.controller';
import HeroComponent from './_ng.component';
import HeroTemplate from './hero.html!text';

describe('Hero Component', ()=>{
	let $rootScope,
	makeController;

	beforeEach(angular.mock.module(HeroModule.name));
	beforeEach(angular.mock.inject((_$rootScope_)=>{
		$rootScope = _$rootScope_;
		makeController = ()=> new HeroController();
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

		it('should have name in template [REMOVE]', ()=>{
			expect(HeroTemplate).toEqual(jasmine.stringMatching(/{{\s?vm\.name\s?}}/g));
		});
	});


	describe('Component', ()=>{
			// test the component/directive itself
			let component = HeroComponent();

			it('should use the right template',()=>{
				expect(component.template).toEqual(HeroTemplate);
			});

			it('should use controllerAs', ()=>{
				expect(component.controllerAs).toEqual(jasmine.anything());
			});

			it('should use the right controller', ()=>{
				expect(component.controller).toEqual(HeroController);
			});
	});
});






