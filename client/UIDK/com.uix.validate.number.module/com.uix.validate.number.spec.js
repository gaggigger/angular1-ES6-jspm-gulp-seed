// Have to import angular first before angular-mocks
// https://github.com/Workiva/karma-jspm/issues/23
import angular from 'angular';
import 'angular-mocks';
import ComUixValidateNumberModule from '../com.uix.validate.number'
import ComUixValidateNumberFactory from './com.uix.validate.number.factory';

describe('ComUixValidateNumber', ()=>{

	let createFactory;

	beforeEach(angular.mock.module(ComUixValidateNumberModule.name));
	beforeEach(angular.mock.inject((_$log_)=>{
		createFactory = ()=>{
			return ComUixValidateNumberFactory.factory(_$log_);
		};
	}));

	describe('Module', ()=>{
		// test things about the component module
		// checking to see if it registers certain things and what not
		// test for best practices with naming too
		// test for routing
		
		it('should have module name', function() {
			expect(ComUixValidateNumberModule.name).toEqual('com.uix.validate.number');
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






