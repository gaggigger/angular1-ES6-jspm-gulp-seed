// Have to import angular first before angular-mocks
// https://github.com/Workiva/karma-jspm/issues/23
import angular from 'angular';
import 'angular-mocks';
import HomeModule from './_ng'
import HomeRoutes from './_ng.routes';
import HomeController from './home.controller';
import HomeTemplate from './home.html!text';

describe('Home', ()=>{
    let $log;
    let makeController;
    let routes;

    let states;
    let $stateProvider;
    let otherwise;
    let $urlRouterProvider;

    beforeEach(angular.mock.module(HomeModule.name));
    beforeEach(angular.mock.inject(($injector)=>{
        $log                    = $injector.get('$log');
        makeController = ()=> new HomeController($log);

        states = {};
        $stateProvider = {
            state: function(key, state) {
                states[key] = state;
            }
        };

        $urlRouterProvider = {
            otherwise: function(route) {
                otherwise = route;
            }
        };

        HomeRoutes($stateProvider, $urlRouterProvider);
    }));

    afterEach(function() {
        states 			= null;
        $stateProvider 	= null;
        routes			= null;
        $urlRouterProvider = null;
        otherwise       = null;
    });

    describe('Module', ()=>{
        // test things home the component module
        // checking to see if it registers certain things and what not
        // test for best practices with naming too
        // test for routing
    });

    describe('Routes', ()=>{

        var homeState;
        var homeStateView;

        beforeEach(()=>{
            homeState = states['layoutHome.home'];
            homeStateView = homeState.views['content@layoutHome'];
        });

        afterEach(()=>{
            homeState = null;
            homeStateView = null;
        });

        it('should register otherwise', ()=>{
            expect(otherwise).toEqual('/home');
        });

        it('should register state', ()=>{
            expect(homeState).toBeDefined();
        });

        it('should assign url', ()=>{
            expect(homeState.url).toEqual('');
        });

        it('should have content@layoutHome view', ()=>{
            expect(homeStateView).toBeDefined();
        });

        it('should have a view template property', ()=>{
            expect(homeStateView.template).toEqual(jasmine.stringMatching(/\s?ix\-sample\-one\s?/g));
        });

        it('should have a view controller property', ()=>{
            expect(homeStateView.controller).toBeDefined();
        });

        it('should have a view controllerAs property', ()=>{
            expect(homeStateView.controllerAs).toEqual('vm');
        });

        it('should have a bindToController property', ()=>{
            expect(homeStateView.bindToController).toBeTruthy();
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
            expect(HomeTemplate).toEqual(jasmine.stringMatching(/\s?ix\-sample\-one\s?/g));
        });
    });

});
