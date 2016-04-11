// Have to import angular first before angular-mocks
// https://github.com/Workiva/karma-jspm/issues/23
import angular from 'angular';
import 'angular-mocks';
import <%= camelCaseName %>Module from '../<%= name %>'
import <%= camelCaseName %>Factory from './<%= name %>.factory';

describe('<%= camelCaseName %>', ()=>{

	let createFactory;

	beforeEach(angular.mock.module(<%= camelCaseName %>Module.name));
	beforeEach(angular.mock.inject((_$log_)=>{
		createFactory = ()=>{
			return <%= camelCaseName %>Factory.factory(_$log_);
		};
	}));

	describe('Module', ()=>{
		// test things about the component module
		// checking to see if it registers certain things and what not
		// test for best practices with naming too
		// test for routing
		
		it('should have module name', function() {
			expect(<%= camelCaseName %>Module.name).toEqual('<%= name %>');
		})
	});

	describe('Factory', ()=>{
		// test your controller here

		it('should have a name property [REMOVE]', ()=>{ // erase me if you remove this.name from the controller
			let factory = createFactory();

			expect(factory.name).toEqual(jasmine.anything());
		});
	});

	describe('Methods', ()=>{
			// test factory itselve
			let factory;

			beforeEach(function() {
				factory = createFactory();
			});

			afterEach(function() {
				factory = null;
			})

			it('should use the getter',()=>{
				expect(factory.data).toEqual('bar');
			});

			it('should use the setter', ()=>{
				factory.data = 'foo';
				expect(factory.data).toEqual('foo');
			});
	});
});






