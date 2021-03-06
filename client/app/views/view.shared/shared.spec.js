// Have to import angular first before angular-mocks
// https://github.com/Workiva/karma-jspm/issues/23
import angular from 'angular';
import 'angular-mocks';
import SharedModule from './_ng'
import SharedRoutes from './_ng.routes';
import SharedController from './shared.controller';
import SharedTemplate from './shared.html!text';

describe('Shared', ()=>{
    let $log;
    let makeController;
    let routes;

    let states;
    let $stateProvider;

    beforeEach(angular.mock.module(SharedModule.name));
    beforeEach(angular.mock.inject(($injector)=>{
        $log                    = $injector.get('$log');
        makeController = ()=> new SharedController($log);

        states = {};
        $stateProvider = {
            state: function(key, state) {
                states[key] = state;
            }
        };

        SharedRoutes($stateProvider);
    }));

    afterEach(function() {
        states 			= null;
        $stateProvider 	= null;
        routes			= null;
    });

    describe('Module', ()=>{
        // test things shared the component module
        // checking to see if it registers certain things and what not
        // test for best practices with naming too
        // test for routing
    });

    describe('Routes', ()=>{

        var supportState;
        var homeState;
        var sharedStateHomeView;
        var sharedStateSupportView;

        beforeEach(()=>{
            supportState = states['layoutSupport.shared'];
            homeState = states['layoutHome.shared'];
            sharedStateHomeView = homeState.views['content@layoutHome'];
            sharedStateSupportView = supportState.views['content@layoutSupport'];
        });

        afterEach(()=>{
            supportState = null;
            sharedStateHomeView = null;
        });

        describe('support', ()=>{
            it('should register state', ()=>{
                expect(supportState).toBeDefined();
            });

            it('should assign url', ()=>{
                expect(supportState.url).toEqual('/shared');
            });

            it('should have content@layoutSupport view', ()=>{
                expect(sharedStateSupportView).toBeDefined();
            });

            it('should have a view template property', ()=>{
                expect(sharedStateSupportView.template).toEqual(jasmine.stringMatching(/\s?Shared\s?/g));
            });

            it('should have a view controller property', ()=>{
                expect(sharedStateSupportView.controller).toBeDefined();
            });

            it('should have a view controllerAs property', ()=>{
                expect(sharedStateSupportView.controllerAs).toEqual('vm');
            });

            it('should have a bindToController property', ()=>{
                expect(sharedStateSupportView.bindToController).toBeTruthy();
            });
        });

        describe('home', ()=>{

            it('should register state', ()=>{
                expect(homeState).toBeDefined();
            });

            it('should assign url', ()=>{
                expect(homeState.url).toEqual('/shared');
            });

            it('should have content@layoutSupport view', ()=>{
                expect(sharedStateHomeView).toBeDefined();
            });

            it('should have a view template property', ()=>{
                expect(sharedStateHomeView.template).toEqual(jasmine.stringMatching(/\s?Shared\s?/g));
            });

            it('should have a view controller property', ()=>{
                expect(sharedStateHomeView.controller).toBeDefined();
            });

            it('should have a view controllerAs property', ()=>{
                expect(sharedStateHomeView.controllerAs).toEqual('vm');
            });

            it('should have a bindToController property', ()=>{
                expect(sharedStateHomeView.bindToController).toBeTruthy();
            });
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

        it('should have ix-sample-one [REMOVE]', ()=>{
            expect(SharedTemplate).toEqual(jasmine.stringMatching(/\s?Shared\s?/g));
        });
    });

});
