// Have to import angular first before angular-mocks
// https://github.com/Workiva/karma-jspm/issues/23
import angular from 'angular';
import 'angular-mocks';
import createES6Factory from '../../services/factory.es6/es6.factory';
import SampleOneModule from './_ng'
import sampleOneController from './sampleOne.controller';
import sampleOneComponent from './sampleOne.component';
import sampleOneTemplate from './sampleOne.html!text';

describe('sampleOne', ()=>{
	let $rootScope;
    let $log;
    let $timeout;
    let angularES6Class;
    let johnPapaService;
    let es6Factory;
    let makeController;

	// beforeEach(angular.mock.module(services.name));
	beforeEach(angular.mock.module(SampleOneModule.name));
	beforeEach(angular.mock.inject(($injector)=>{
        $rootScope              = $injector.get('$rootScope');
        $log                    = $injector.get('$log');
        $timeout                = $injector.get('$timeout');
        angularES6Class         = $injector.get('angularES6Class');
        johnPapaService         = $injector.get('johnPapaService');

        es6Factory              = createES6Factory();
        es6Factory.publish(null, ''); // reset
		makeController          = ()=> new sampleOneController($log, $timeout, angularES6Class, johnPapaService);

	}));

    afterEach(function() {
        es6Factory.publish(null, ''); // reset

        $rootScope = null;
        $log = null;
        $timeout = null;
        angularES6Class = null;
        johnPapaService = null;
        es6Factory = null;
        makeController = null;
    });

	describe('Module', ()=>{
		// test things about the component module
		// checking to see if it registers certain things and what not
		// test for best practices with naming too
		// test for routing
	});

    describe('es6Factory', ()=>{
        it('should subscribe to es6Factory', ()=> {
            let controller = makeController();

            es6Factory.publish(null, 'BAZ');

            $timeout.flush();

            expect(controller.es6).toEqual('BAZ');
        });

        it('should publish to es6Factory', ()=> {
            let controller = makeController();
            controller.es6 = 'BAR';
            controller.onES6Change();

            $timeout.flush();

            expect(es6Factory.data).toEqual('BAR');
        });
    });

    describe('angularES6Class', ()=>{
        it('should subscribe to angularES6Class', ()=> {
            let controller = makeController();

            angularES6Class.publish(null, 'FOO');

            $timeout.flush();

            expect(controller.input).toEqual('FOO');
        })
    });

    describe('johnPapaService', ()=>{
        it('should subscribe to johnPapaService', ()=> {
            let controller = makeController();

            johnPapaService.publish(null, 'BAR');

            $timeout.flush();

            expect(controller.papa).toEqual('BAR');
        })
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






