// Have to import angular first before angular-mocks
// https://github.com/Workiva/karma-jspm/issues/23
import angular from 'angular';
import 'angular-mocks';
import SampleOneModel from './sampleOne.model';
import createES6Factory from '../../../services/factory.es6/es6.factory.js';
import sampleOneModule from '../_ng';


describe('SampleOneModel', function() {
    let componentId;
    let $log;
    let $q;
    let angularES6Class;
    let johnPapaService;
    let makeModel;
    let es6Factory;

    beforeEach(angular.mock.module(sampleOneModule.name));
    beforeEach(angular.mock.inject(($injector)=>{
        componentId             = 'foo';
        $log    	            = $injector.get('$log');
        $q    	                = $injector.get('$q');
        angularES6Class         = $injector.get('angularES6Class');
        johnPapaService    	    = $injector.get('johnPapaService');

        es6Factory              = createES6Factory();

        makeModel               = ()=> new SampleOneModel(componentId, $log, $q, angularES6Class, johnPapaService);
    }));

    afterEach(function() {
        componentId         = null;
        $log                = null;
        $q                  = null;
        angularES6Class     = null;
        johnPapaService     = null;
        makeModel           = null;
        es6Factory          = null;
    });

    describe('subscribe', function() {

        let model;

        beforeEach(function() {
            spyOn(angularES6Class, 'subscribe');
            spyOn(johnPapaService, 'subscribe');
            spyOn(es6Factory, 'subscribe');
            model = makeModel();
        });

        afterEach(function() {
            model = null;
        });

        it('should subscribe to subscribeAngularES6Class', function() {
            model.subscribeAngularES6Class();
            expect(angularES6Class.subscribe).toHaveBeenCalled();
        });

        it('should subscribe to subscribeES6', function() {
            model.subscribeES6();
            expect(es6Factory.subscribe).toHaveBeenCalled();
        });

        it('should subscribe to subscribeJohnPapa', function() {
            model.subscribeJohnPapa();
            expect(johnPapaService.subscribe).toHaveBeenCalled();
        });

    });

    describe('publish', function() {

        let model;

        beforeEach(function() {
            spyOn(angularES6Class, 'publish');
            spyOn(johnPapaService, 'publish');
            spyOn(es6Factory, 'publish');
            model = makeModel();
        });

        afterEach(function() {
            model = null;
        });

        it('should publish to publisAngularES6Class', function() {
            model.publisAngularES6Class('bar');
            expect(angularES6Class.publish).toHaveBeenCalledWith('foo', 'bar');
        });

        it('should publish to publishEs6', function() {
            model.publishEs6('bar');
            expect(es6Factory.publish).toHaveBeenCalledWith('foo', 'bar');
        });

        it('should publish to publishJohnPapa', function() {
            model.publishJohnPapa('bar');
            expect(johnPapaService.publish).toHaveBeenCalledWith('foo', 'bar');
        });

    });
});
