// Have to import angular first before angular-mocks
// https://github.com/Workiva/karma-jspm/issues/23
import angular from 'angular';
import 'angular-mocks';
import <%= name %>Module from './_ng'
import <%= name %>Routes from './_ng.routes';
import <%= InitialCaseName %>Controller from './<%= name %>.controller';
import <%= name %>Template from './<%= name %>.html!text';

describe('<%= InitialCaseName %> View', ()=>{
	let $log;
	let makeController;
	let routes;

	let states;
	let $stateProvider;

	beforeEach(angular.mock.module(<%= name %>Module.name));
	beforeEach(angular.mock.inject(($injector)=>{
		$log                    = $injector.get('$log');
		makeController = ()=> new <%= InitialCaseName %>Controller($log);

		states = {};
		$stateProvider = {
			state: function(key, state) {
				states[key] = state;
			}
		};

		<%= name %>Routes($stateProvider);
	}));

	afterEach(function() {
		states 			= null;
		$stateProvider 	= null;
		routes			= null;
	});

	describe('Module', ()=>{
		// test things <%= name %> the component module
		// checking to see if it registers certain things and what not
		// test for best practices with naming too
		// test for routing
	});

	describe('Routes', ()=>{

		var <%= name %>State;
		var <%= name %>StateView;

		beforeEach(()=>{
			<%= name %>State = states['layoutHome.<%= name %>'];
			<%= name %>StateView = <%= name %>State.views['content@layoutHome'];
		});

		afterEach(()=>{
			<%= name %>State = null;
			<%= name %>StateView = null;
		});

		it('should register state', ()=>{
			expect(<%= name %>State).toBeDefined();
		});

		it('should assign url', ()=>{
			expect(<%= name %>State.url).toEqual('/<%= route %>');
		});

		it('should have content@layoutHome view', ()=>{
			expect(<%= name %>StateView).toBeDefined();
		});

		it('should have a view template property', ()=>{
			expect(<%= name %>StateView.template).toEqual(jasmine.stringMatching(/\s?vm\.sendToConsole\s?/g));
		});

		it('should have a view controller property', ()=>{
			expect(<%= name %>StateView.controller).toBeDefined();
		});

		it('should have a view controllerAs property', ()=>{
			expect(<%= name %>StateView.controllerAs).toEqual('vm');
		});

		it('should have a bindToController property', ()=>{
			expect(<%= name %>StateView.bindToController).toBeTruthy();
		});
	});

	describe('Controller', ()=>{
		// test your controller here

		it('should have a name property [REMOVE]', ()=>{ // erase me if you remove this.name from the controller
			let controller = makeController();

			// expect(controller).to.have.property('name');
			expect(controller.name).toEqual(jasmine.anything());
		});
	});

	describe('Template', ()=>{
		// test the template
		// use Regexes to test that you are using the right bindings {{  }}

		it('should have vm.sendToConsole [REMOVE]', ()=>{
			// expect(<%= name %>Template).to.match(/{{\s?vm\.name\s?}}/g);
			expect(<%= name %>Template).toEqual(jasmine.stringMatching(/\s?vm\.sendToConsole\s?/g));
		});
	});

});
