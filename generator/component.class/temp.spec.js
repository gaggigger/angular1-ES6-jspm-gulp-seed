// Have to import angular first before angular-mocks
// https://github.com/Workiva/karma-jspm/issues/23
import angular from 'angular';
import 'angular-mocks';
import <%= upCaseName %>Module from './_ng'
import <%= upCaseName %>Controller from './<%= name %>.controller';
import <%= upCaseName %>Component from './<%= name %>.component';
import <%= upCaseName %>Template from './<%= name %>.html!text';

describe('<%= upCaseName %>', ()=>{
	let $log;
	let makeController;
	
	beforeEach(angular.mock.module(<%= upCaseName %>Module.name));
	beforeEach(angular.mock.inject(($injector)=>{
		$log = $injector.get('$log');
		makeController = ()=>{
			return new <%= upCaseName %>Controller($log);
		};
	}));
	
	afterEach(function() {
		$log = null;
		makeController = null;
	});
	
	describe('Module', ()=>{
		// test things about the component module
		// checking to see if it registers certain things and what not
		// test for best practices with naming too
		// test for routing
	});
	
	describe('Controller', ()=>{
		// test your controller here
		beforeEach(function() {
			spyOn($log, 'info');
		});
		
		it('should have a name property [REMOVE]', ()=>{ // erase me if you remove this.name from the controller
			let controller = makeController();

			expect(controller.name).toEqual(jasmine.anything());
		});
		
		it('should $log.info init', ()=> {
			expect($log.info).toHabeBeenCalledWith('init');
		});
	});
	
	describe('Template', ()=>{
		// test the template
		// use Regexes to test that you are using the right bindings {{  }}
		
		it('should have name in template [REMOVE]', ()=>{
			expect(<%= upCaseName %>Template).toEqual(jasmine.stringMatching(/\s?vm\.name\s?/g));

		});
	});
	
	
	describe('Component', ()=>{
			// test the component/directive itself
			let component = <%= upCaseName %>Component();
			
			it('should use the right template',()=>{
				expect(component.template).toEqual(<%= upCaseName %>Template);
			});
			
			it('should use controllerAs', ()=>{
				expect(component).to.have.property('controllerAs');
			});
			
			it('should use the right controller', ()=>{
				expect(component.controller).to.equal(<%= upCaseName %>Controller);
			});
	});
});

 




