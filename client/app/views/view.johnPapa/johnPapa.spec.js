// Have to import angular first before angular-mocks
// https://github.com/Workiva/karma-jspm/issues/23
import angular from 'angular';
import 'angular-mocks';
import JohnPapaModule from './_ng'
import JohnPapaRoutes from './_ng.routes';
import JohnPapaController from './johnPapa.controller';
import JohnPapaTemplate from './johnPapa.html!text';

describe('JohnPapa', ()=>{
    let $log;
    let makeController;
    let routes;

    let states;
    let $stateProvider;

    beforeEach(angular.mock.module(JohnPapaModule.name));
    beforeEach(angular.mock.inject(($injector)=>{
        $log                    = $injector.get('$log');
        makeController = ()=> new JohnPapaController($log);

        states = {};
        $stateProvider = {
            state: function(key, state) {
                states[key] = state;
            }
        };

        JohnPapaRoutes($stateProvider);
    }));

    afterEach(function() {
        states 			= null;
        $stateProvider 	= null;
        routes			= null;
    });

    describe('Module', ()=>{
        // test things johnPapa the component module
        // checking to see if it registers certain things and what not
        // test for best practices with naming too
        // test for routing
    });

    describe('Routes', ()=>{

        var johnPapaState;
        var johnPapaStateView;

        beforeEach(()=>{
            johnPapaState = states['layoutSupport.support'];
            johnPapaStateView = johnPapaState.views['content@layoutSupport'];
        });

        afterEach(()=>{
            johnPapaState = null;
            johnPapaStateView = null;
        });

        it('should register state', ()=>{
            expect(johnPapaState).toBeDefined();
        });

        it('should assign url', ()=>{
            expect(johnPapaState.url).toEqual('');
        });

        it('should have content@layoutSupport view', ()=>{
            expect(johnPapaStateView).toBeDefined();
        });

        it('should have a view template property', ()=>{
            expect(johnPapaStateView.template).toEqual(jasmine.stringMatching(/\s?ix\-sample\-one\s?/g));
        });

        it('should have a view controller property', ()=>{
            expect(johnPapaStateView.controller).toBeDefined();
        });

        it('should have a view controllerAs property', ()=>{
            expect(johnPapaStateView.controllerAs).toEqual('vm');
        });

        it('should have a bindToController property', ()=>{
            expect(johnPapaStateView.bindToController).toBeTruthy();
        });
    });

    describe('Controller', ()=>{
        // test your controller here

        it('should have a name property [REMOVE]', ()=>{ // erase me if you remove this.name from the controller
            let controller = makeController();
            expect(controller.name).toEqual(jasmine.anything());
        });
    });

    describe('Template', ()=>{
        // test the template
        // use Regexes to test that you are using the right bindings {{  }}

        it('should have vm.sendToConsole [REMOVE]', ()=>{
            expect(JohnPapaTemplate).toEqual(jasmine.stringMatching(/\s?ix\-sample\-one\s?/g));
        });
    });

});
