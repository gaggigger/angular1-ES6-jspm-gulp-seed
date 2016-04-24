// Have to import angular first before angular-mocks
// https://github.com/Workiva/karma-jspm/issues/23
import angular from 'angular';
import 'angular-mocks';
import <%= camelCaseName %>Module from './_ng'
import <%= camelCaseName %>Factory from './<%= name %>.factory';

describe('<%= camelCaseName %>', ()=>{

	let createFactory;
	let $log;
	let $q;

	beforeEach(angular.mock.module(<%= camelCaseName %>Module.name));
	beforeEach(angular.mock.inject(($injector)=>{
		$log = $injector.get('$log');
		$q = $injector.get('$q');

		createFactory = ()=>{
			return <%= camelCaseName %>Factory.factory($log, $q);
		};
	}));

	afterEach(function() {
		$log = null;
		$q = null;
	});

	describe('Module', ()=>{
		// test things about the component module
		// checking to see if it registers certain things and what not
		// test for best practices with naming too
		// test for routing

		it('should have module name', function() {
			expect(<%= camelCaseName %>Module.name).toEqual('<%= name %>.factory');
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






