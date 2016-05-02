'use strict';

// unit tests pass
import forOwn from 'lodash/forOwn';

// _ map in jspm.config for convenience
// unit tests fails
// import forOwn from '_/forOwn';

// imports only forOwn feature
// unit tests fails
// import forOwn from 'lodash/lodash/forOwn';

// imports entire lodash library
// Pass unit tests
// import { forOwn } from 'lodash/lodash';

const LOG = new WeakMap();
const TIMEOUT = new WeakMap();

class SampleClassFactory {
    constructor($log, $timeout) {
        this._cache = '';
        this.subscribers = {};

        LOG.set(this, $log);
        TIMEOUT.set(this, $timeout);

        LOG.get(this).log('Instantiating SampleClassFactory');

    }

    set data(newValue) {
        this._cache = newValue.data;
        this.notify(newValue.id);
    }

    get data() {
        return this._cache;
    }

    publish(id, newValue) {
        this._cache = newValue;
        this.notify(id);
    }

    subscribe(uniqueName, callback) {
        this.subscribers[uniqueName] = callback;

        if (this._cache.length) {
            this.notify();
        }
    }

    notify(id) {
        let $timeout = TIMEOUT.get(this);
        let cache = this._cache;

        forOwn(this.subscribers, function(subscriber, key) {

            /**
             * Make sure subscriber is a function.
             *
             * To minimize $digest cycles, only publish to
             * subscribers that do not have the
             * same id as the publisher.
             */
            if (typeof subscriber === 'function' && (!id || id && id !== key)) {
                $timeout(function() {
                    subscriber.call(null, cache);
                }, 0, true)
            }
        });
    }

    unsubscribe(id) {
        delete this.subscribers[id];
    }

    /**
     * Angular factory requires a function, not a class.
     *
     * @param $log
     * @param $timeout
     * @returns {SampleClassFactory}
     */
    static factory($log, $timeout) {
        return new SampleClassFactory($log, $timeout);
    }
}

export default SampleClassFactory;
