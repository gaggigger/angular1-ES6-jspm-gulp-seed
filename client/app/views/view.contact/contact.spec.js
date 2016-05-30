// Have to import angular first before angular-mocks
// https://github.com/Workiva/karma-jspm/issues/23
import angular from 'angular';
import 'angular-mocks';
import ContactModule from './_ng'
import ContactRoutes from './_ng.routes';
import ContactController from './contact.controller';
import ContactTemplate from './contact.html!text';

describe('Contact', ()=>{
    let $log;
    let makeController;
    let routes;

    let states;
    let $stateProvider;

    beforeEach(angular.mock.module(ContactModule.name));
    beforeEach(angular.mock.inject(($injector)=>{
        $log                    = $injector.get('$log');
        makeController = ()=> new ContactController($log);

        states = {};
        $stateProvider = {
            state: function(key, state) {
                states[key] = state;
            }
        };

        ContactRoutes($stateProvider);
    }));

    afterEach(function() {
        states 			= null;
        $stateProvider 	= null;
        routes			= null;
    });

    describe('Module', ()=>{
        // test things contact the component module
        // checking to see if it registers certain things and what not
        // test for best practices with naming too
        // test for routing
    });

    describe('Routes', ()=>{

        var contactState;
        var contactStateView;

        beforeEach(()=>{
            contactState = states['layoutSupport.contact'];
            contactStateView = contactState.views['content@layoutSupport'];
        });

        afterEach(()=>{
            contactState = null;
            contactStateView = null;
        });

        it('should register state', ()=>{
            expect(contactState).toBeDefined();
        });

        it('should assign url', ()=>{
            expect(contactState.url).toEqual('/contact');
        });

        it('should have content@layoutSupport view', ()=>{
            expect(contactStateView).toBeDefined();
        });

        it('should have a view template property', ()=>{
            expect(contactStateView.template).toEqual(jasmine.stringMatching(/\s?ix\-sample\-one\s?/g));
        });

        it('should have a view controller property', ()=>{
            expect(contactStateView.controller).toBeDefined();
        });

        it('should have a view controllerAs property', ()=>{
            expect(contactStateView.controllerAs).toEqual('vm');
        });

        it('should have a bindToController property', ()=>{
            expect(contactStateView.bindToController).toBeTruthy();
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
            expect(ContactTemplate).toEqual(jasmine.stringMatching(/\s?ix\-sample\-one\s?/g));
        });
    });

});
