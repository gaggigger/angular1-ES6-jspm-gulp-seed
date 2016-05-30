// Have to import angular first before angular-mocks
// https://github.com/Workiva/karma-jspm/issues/23
import angular from 'angular';
import 'angular-mocks';
import AboutModule from './_ng'
import AboutRoutes from './_ng.routes';
import AboutController from './about.controller';
import AboutTemplate from './about.html!text';

describe('About', ()=>{
	let $log;
	let makeController;
	let routes;

	let states;
	let $stateProvider;

	beforeEach(angular.mock.module(AboutModule.name));
	beforeEach(angular.mock.inject(($injector)=>{
		$log                    = $injector.get('$log');
		makeController = ()=> new AboutController($log);

		states = {};
		$stateProvider = {
			state: function(key, state) {
				states[key] = state;
			}
		};

		AboutRoutes($stateProvider);
	}));

	afterEach(function() {
		states 			= null;
		$stateProvider 	= null;
		routes			= null;
	});

	describe('Module', ()=>{
		// test things about the component module
		// checking to see if it registers certain things and what not
		// test for best practices with naming too
		// test for routing
	});

	describe('Routes', ()=>{

		var aboutState;
		var aboutStateView;

		beforeEach(()=>{
			aboutState = states['layoutHome.about'];
			aboutStateView = aboutState.views['content@layoutHome'];
		});

		afterEach(()=>{
			aboutState = null;
			aboutStateView = null;
		});

		it('should register state', ()=>{
			expect(aboutState).toBeDefined();
		});

		it('should assign url', ()=>{
			expect(aboutState.url).toEqual('/about');
		});

		it('should have content@layoutHome view', ()=>{
			expect(aboutStateView).toBeDefined();
		});

		it('should have a view template property', ()=>{
			expect(aboutStateView.template).toEqual(jasmine.stringMatching(/\s?vm\.sendToConsole\s?/g));
		});

		it('should have a view controller property', ()=>{
			expect(aboutStateView.controller).toBeDefined();
		});

		it('should have a view controllerAs property', ()=>{
			expect(aboutStateView.controllerAs).toEqual('vm');
		});

		it('should have a bindToController property', ()=>{
			expect(aboutStateView.bindToController).toBeTruthy();
		});
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

		it('should have vm.sendToConsole [REMOVE]', ()=>{
			expect(AboutTemplate).toEqual(jasmine.stringMatching(/\s?vm\.sendToConsole\s?/g));
		});
	});

});
