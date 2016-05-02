// Have to import angular first before angular-mocks
// https://github.com/Workiva/karma-jspm/issues/23
import angular from 'angular';
import 'angular-mocks';
import <%= camelCaseName %>Module from './_ng'
import <%= camelCaseName %>Routes from './_ng.routes';
import <%= camelCaseName %>Template from './<%= name %>.html!text';

describe('<%= camelCaseName %> Layout', ()=>{
	let routes;
	let states;
	let $stateProvider;

	beforeEach(angular.mock.module(<%= camelCaseName %>Module.name));
	beforeEach(angular.mock.inject(($injector)=>{
		states = {};
		$stateProvider = {
			state: function(key, state) {
				states[key] = state;
			}
		};

		<%= camelCaseName %>Routes($stateProvider);
	}));

	afterEach(function() {
		states 			= null;
		$stateProvider 	= null;
		routes			= null;
	});

	describe('Module', ()=>{
		// test things <%= camelCaseName %> the component module
		// checking to see if it registers certain things and what not
		// test for best practices with naming too
		// test for routing
	});

	describe('State', ()=>{

		var <%= camelCaseName %>State;
		var <%= camelCaseName %>StateView;

		beforeEach(()=>{
			<%= camelCaseName %>State = states['layout<%= InitialCaseName %>'];
		});

		afterEach(()=>{
			<%= camelCaseName %>State = null;
			<%= camelCaseName %>StateView = null;
		});

		it('should register state', ()=>{
			expect(<%= camelCaseName %>State).toBeDefined();
		});

		it('should assign url', ()=>{
			expect(<%= camelCaseName %>State.url).toEqual('/<%= route %>');
		});

		it('should have a view template property', ()=>{
			expect(<%= camelCaseName %>State.template).toEqual(jasmine.stringMatching(/\s?ui\-view\=\"content\"\s?/g));
		});

		it('should have redirectTo state', ()=>{
			expect(<%= camelCaseName %>State.redirectTo).toEqual('layout<%= InitialCaseName %>.<%= redirectTo %>');
		});
	});


	describe('Template', ()=>{
		// test the template
		// use Regexes to test that you are using the right bindings {{  }}

		it('should have iu-viw=\"content\" [REMOVE]', ()=>{
			expect(<%= camelCaseName %>Template).toEqual(jasmine.stringMatching(/\s?ui\-view\=\"content\"\s?/g));
		});
	});

});
