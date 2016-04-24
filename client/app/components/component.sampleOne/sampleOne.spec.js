// Have to import angular first before angular-mocks
// https://github.com/Workiva/karma-jspm/issues/23
import angular from 'angular';
import 'angular-mocks';
import SampleOneModule from './_ng'
import sampleOneController from './sampleOne.controller';
import {sampleOneComponent} from './_ng.component';
import sampleOneTemplate from './sampleOne.html!text';

describe('sampleOne', ()=>{
	let $rootScope;
    let makeController;
	let makeController2;
    let makeModel;
	let ixSampleOneModel;
    let $scope;
	let $scope2;
    let $timeout;

	// beforeEach(angular.mock.module(services.name));
	beforeEach(angular.mock.module(SampleOneModule.name));
	beforeEach(angular.mock.inject(($injector)=>{
        $rootScope              = $injector.get('$rootScope');
        ixSampleOneModel    	= $injector.get('ixSampleOneModel');
        $timeout                = $injector.get('$timeout');
        $scope                  = $rootScope.$new();
        $scope2                 = $rootScope.$new();

		makeController          = ()=> new sampleOneController($scope, ixSampleOneModel);
		makeController2         = ()=> new sampleOneController($scope2, ixSampleOneModel);
		makeModel	            = (componentId)=> {
			return ixSampleOneModel.get(componentId);
		};

	}));

    afterEach(function() {

        $rootScope      = null;
        $timeout        = null;
        makeController  = null;
		makeController2 = null;
		makeModel		= null;
        $scope          = null;
		$scope2			= null;
    });

	describe('Module', ()=>{
		// test things about the component module
		// checking to see if it registers certain things and what not
		// test for best practices with naming too
		// test for routing
	});

    describe('model', ()=>{

		describe('subscribe componentId', function() {
			let model;

			beforeEach(function() {

				$scope.componentId		= 'foo';
				model 					= makeModel($scope.componentId);

				spyOn(model, 'subscribeAngularES6Class').and.callThrough();
				spyOn(model, 'subscribeJohnPapa').and.callThrough();
				spyOn(model, 'subscribeES6').and.callThrough();

			});

			afterEach(function() {
				model = null;
			});

			it('should subscribe to subscribeAngularES6Class', ()=> {
				makeController();

				expect(model.subscribeAngularES6Class).toHaveBeenCalled();
			});

			it('should subscribe to subscribeJohnPapa', ()=> {
				makeController();

				expect(model.subscribeJohnPapa).toHaveBeenCalled();
			});

			it('should subscribe to subscribeES6', ()=> {
				makeController();

				expect(model.subscribeES6).toHaveBeenCalled();
			});
		});

		describe('subscribe default', function() {
			let model;

			beforeEach(function() {

				//id same as controller name
				$scope.componentId = null;
				model = makeModel('sampleOneController');

				spyOn(model, 'subscribeAngularES6Class').and.callThrough();
				spyOn(model, 'subscribeJohnPapa').and.callThrough();
				spyOn(model, 'subscribeES6').and.callThrough();

			});

			afterEach(function() {
				model = null;
			});

			it('should subscribe to subscribeAngularES6Class', ()=> {
				makeController();

				expect(model.subscribeAngularES6Class).toHaveBeenCalled();
			});

			it('should subscribe to subscribeJohnPapa', ()=> {
				makeController();

				expect(model.subscribeJohnPapa).toHaveBeenCalled();
			});

			it('should subscribe to subscribeES6', ()=> {
				makeController();

				expect(model.subscribeES6).toHaveBeenCalled();
			});
		});

		describe('publish', function() {

			beforeEach(function() {
				$scope2.componentId = 'foo2';
			});

			it('should publish onClassChange', ()=> {

				let controller = makeController();
				let controller2 = makeController2();


				expect(controller2.input).toEqual('');

				controller.input = 'input value';
				controller.onClassChange();
				$timeout.flush();

				expect(controller2.input).toEqual('input value');
			});

			it('should publish onES6Change', ()=> {
				let controller = makeController();
				let controller2 = makeController2();

				expect(controller2.es6).toEqual('');

				controller.es6 = 'input value';
				controller.onES6Change();
				$timeout.flush();

				expect(controller2.es6).toEqual('input value');
			});

			it('should publish onPapaChange', ()=> {
				let controller = makeController();
				let controller2 = makeController2();

				expect(controller2.papa).toEqual('');

				controller.papa = 'input value';
				controller.onPapaChange();
				$timeout.flush();

				expect(controller2.papa).toEqual('input value');
			});
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

		it('should have vm.input in template [REMOVE]', ()=>{
			// expect(sampleOneTemplate).toEqual(jasmine.stringMatching(/{{\s?vm\.input\s?}}/g));
			expect(sampleOneTemplate).toEqual(jasmine.stringMatching(/\s?vm\.input\s?/g));
			expect(sampleOneTemplate).toEqual(jasmine.stringMatching(/\s?vm\.papa\s?/g));
			expect(sampleOneTemplate).toEqual(jasmine.stringMatching(/\s?vm\.es6\s?/g));
		});
	});


	describe('Component', ()=>{
			// test the component/directive itself
			let component = sampleOneComponent();

			it('should use the right template',()=>{
				// expect(component.template).to.equal(sampleOneTemplate);
				expect(component.template).toEqual(sampleOneTemplate);
			});

			it('should use controllerAs', ()=>{
				// expect(component).to.have.property('controllerAs');
				expect(component.controllerAs).toEqual(jasmine.anything());
			});

			it('should use the right controller', ()=>{
				// expect(component.controller).to.equal(sampleOneController);
				expect(component.controller).toEqual(sampleOneController);
			});
	});
});






