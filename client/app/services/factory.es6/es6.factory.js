// _ map in jspm.config for convenience
import forOwn from '_/forOwn';

// imports only forOwn feature
// import forOwn from 'lodash/lodash/forOwn';

// imports entire lodash library
// import { forOwn } from 'lodash/lodash';

class ES6FactoryClass {
    constructor() {
        this._cache = '';
        this.subscribers = {};
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
                subscriber.call(null, cache);
            }
        });
    }

    unsubscribe(id) {
        delete this.subscribers[id];
    }
}

let es6FactorySingleton = null;
export default function es6Factory() {
    if (!es6FactorySingleton) {
        es6FactorySingleton = new ES6FactoryClass();
    }

    return es6FactorySingleton;
};
