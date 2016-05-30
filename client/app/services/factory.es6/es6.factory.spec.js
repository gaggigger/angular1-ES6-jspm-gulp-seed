

import ES6Factory from './es6.factory';

describe('angularES6Class.factory', ()=>{

    let ES6Class;
    let id1;
    let id2;
    let id3;

    let data1;
    let data2;
    let data3;
    let sub1;
    let sub2;
    let sub3;

    beforeEach(function() {
        ES6Class        = ES6Factory();

        ES6Class.publish(null, '');

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
    });

    afterEach(function() {
        ES6Class        = null;
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
            ES6Class.subscribe(id1, sub1);
            ES6Class.subscribe(id2, sub2);
            ES6Class.subscribe(id3, sub3);

            ES6Class.publish(id1, 'FOO');

            expect(data1).not.toBeDefined();
            expect(data2).toEqual('FOO');
            expect(data3).toEqual('FOO');
        });

        it('should publish to all subsribers', ()=> {
            ES6Class.subscribe(id1, sub1);
            ES6Class.subscribe(id2, sub2);
            ES6Class.subscribe(id3, sub3);

            ES6Class.publish(null, 'BAR');

            expect(data1).toEqual('BAR');
            expect(data2).toEqual('BAR');
            expect(data3).toEqual('BAR');
        });
    });

    describe('async', function() {
        it('can publish first', function() {
            ES6Class.publish(id1, 'BAZ');

            ES6Class.subscribe(id1, sub1);
            ES6Class.subscribe(id2, sub2);
            ES6Class.subscribe(id3, sub3);

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
            ES6Class.subscribe(id1, sub1);
            ES6Class.subscribe(id2, sub2);
            ES6Class.subscribe(id3, sub3);

            ES6Class.publish(id1, 'FOO');

            expect(data1).toBeNull();
            expect(data2).toEqual('FOO');
            expect(data3).toEqual('FOO');

            ES6Class.unsubscribe(id2);
            
            ES6Class.publish(id1, 'BAR');
            
            expect(data1).toBeNull();
            expect(data2).toEqual('FOO'); // Because it's previously published
            expect(data3).toEqual('BAR');
        })
    });


});
