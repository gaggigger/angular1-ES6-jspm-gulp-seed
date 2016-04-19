import forOwn from 'lodash/lodash/forown';

class ES6Factory {
    constructor() {
        this._cache = '';
        this.subscribers = {};
        
        console.log('ES6 Factory Created!');
    }

    set data(newValue) {
        this._cache = newValue.data;
        this.notify(newValue.id);
    }

    get data() {
        return this._cache;
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
            if (typeof subscriber === 'function' && id !== key) {
                subscriber.call(null, cache);
            }
        });
    }

    unsubscribe(id) {
        delete this._cache[id];
    }
}


let es6FactorySingleton = null;

export default function es6Factory() {
    if (!es6FactorySingleton) {
        es6FactorySingleton = new ES6Factory();
    }
    
    return es6FactorySingleton;
};
