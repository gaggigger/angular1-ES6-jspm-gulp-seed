import forOwn from 'lodash/lodash/forown';

// (function() {
//     "use strict";
//
//     angular
//         .module('app.services')
//         .factory('factory.johnPapa', factoryJohnPapa);

factoryJohnPapa.$inject = ['$log', '$timeout'];
export default function factoryJohnPapa($log, $timeout) {

    /**
     * Factory API
     */
    var service = {
        setData: setData,
        getData: getData,
        subscribe: subscribe,
        unsubscribe: unsubscribe
    };

    var _cache = '';
    var subscribers = {};

    function setData(newValue) {
        _cache = newValue.data;
        notify(newValue.id);
    }

    function getData() {
        return _cache;
    }

    function subscribe(uniqueName, callback) {
        subscribers[uniqueName] = callback;

        if (_cache.length) {
            notify();
        }
    }

    function notify(id) {

        forOwn(subscribers, function(subscriber, key) {
            if (typeof subscriber === 'function' && id !== key) {
                $timeout(function() {
                    subscriber.call(null, _cache);
                }, 0, true)
            }
        });
    }

    function unsubscribe(id) {
        delete _cache[id];
    }

    return service;
}

// })();
