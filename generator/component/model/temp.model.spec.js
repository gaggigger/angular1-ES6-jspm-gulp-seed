// Have to import angular first before angular-mocks
// https://github.com/Workiva/karma-jspm/issues/23
import angular from 'angular';
import 'angular-mocks';
import <%= upCaseName %>Model from './<%= name %>.model';
import <%= name %>Module from '../_ng';

describe('<%= name %> Model', function() {
    let componentId;
    let $log;
    let $q;
    let makeModel;

    beforeEach(angular.mock.module(<%= name %>Module.name));
    beforeEach(angular.mock.inject(($injector)=>{

        $log    	            = $injector.get('$log');
        $q    	                = $injector.get('$q');

        componentId             = 'foo';
        makeModel 		        = ()=>{
            return new <%= upCaseName %>Model(componentId, $log, $q);
        };
    }));

    afterEach(function() {
        componentId         = null;
        $log                = null;
        $q                  = null;
        makeModel           = null;
    });

    describe('init', function() {

        let model;

        beforeEach(function() {
            spyOn($log, 'info');
            model = makeModel();
        });

        afterEach(function() {
            model = null;
        });

        it('should call init with <%= name %>Model init()', function() {
            expect($log.info).toHaveBeenCalledWith('<%= name %>Model init()');
        });

        it('should call init with foo', function() {
            model.init('foo');
            expect($log.info).toHaveBeenCalledWith('foo');
        });
    });
});
