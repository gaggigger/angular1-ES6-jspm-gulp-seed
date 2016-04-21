// Have to import angular first before angular-mocks
// https://github.com/Workiva/karma-jspm/issues/23
import angular from 'angular';
import 'angular-mocks';
import JohnPapaFactory from './johnPapa.factory';

describe('John Papa Factory', ()=>{

    let $log;
    let $timeout;
    let service;
    let id1;
    let id2;
    let id3;

    let data1;
    let data2;
    let data3;
    let sub1;
    let sub2;
    let sub3;
    
    beforeEach(angular.mock.inject(($injector)=>{
        $log            = $injector.get('$log');
        $timeout        = $injector.get('$timeout');
        service         = JohnPapaFactory($log, $timeout);
        id1             = 'id1';
        id2             = 'id2';
        id3             = 'id3';

        sub1 = function(result) {
            data1 = result;
        };

        sub2 = function(result) {
            data2 = result;
        };

        sub3 = function(result) {
            data3 = result;
        };
    }));

    afterEach(function() {
        $log            = null;
        $timeout        = null;
        service = null;
        id1             = null;
        id2             = null;
        id3             = null;

        data1           = null;
        data2           = null;
        data3           = null;
        sub1            = null;
        sub2            = null;
        sub3            = null;
    });

    describe('pubsub', function() {
        it('should publish to subsribers, except self', ()=> {
            service.subscribe(id1, sub1);
            service.subscribe(id2, sub2);
            service.subscribe(id3, sub3);

            service.publish(id1, 'FOO');
            $timeout.flush();

            expect(data1).not.toBeDefined();
            expect(data2).toEqual('FOO');
            expect(data3).toEqual('FOO');
        });

        it('should publish to all subsribers', ()=> {
            service.subscribe(id1, sub1);
            service.subscribe(id2, sub2);
            service.subscribe(id3, sub3);

            service.publish(null, 'BAR');
            $timeout.flush();

            expect(data1).toEqual('BAR');
            expect(data2).toEqual('BAR');
            expect(data3).toEqual('BAR');
        });
    });

    describe('async', function() {
        it('can publish first', function() {
            service.publish(id1, 'BAZ');

            service.subscribe(id1, sub1);
            service.subscribe(id2, sub2);
            service.subscribe(id3, sub3);

            $timeout.flush();

            expect(data1).toEqual('BAZ');
            expect(data2).toEqual('BAZ');
            expect(data3).toEqual('BAZ');
        })
    });


    describe('unsubscribe', function() {

        beforeEach(function() {
            data1           = null;
            data2           = null;
            data3           = null;
        });

        it('should not publish to unsubscibed subscriber', function() {
            service.subscribe(id1, sub1);
            service.subscribe(id2, sub2);
            service.subscribe(id3, sub3);

            service.publish(id1, 'FOO');
            $timeout.flush();

            expect(data1).toBeNull();
            expect(data2).toEqual('FOO');
            expect(data3).toEqual('FOO');

            service.unsubscribe(id2);

            service.publish(id1, 'BAR');
            $timeout.flush();

            expect(data1).toBeNull();
            expect(data2).toEqual('FOO'); // Because it's previously published
            expect(data3).toEqual('BAR');
        })
    });


});
