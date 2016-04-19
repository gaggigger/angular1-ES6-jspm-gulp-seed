import forOwn from 'lodash/lodash/forown';

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
            if (typeof subscriber === 'function' && id !== key) {
                $timeout(function() {
                    subscriber.call(null, cache);
                }, 0, true)
            }
        });
    }

    unsubscribe(key) {
        delete this._cache[key];
    }

    static factory($log, $timeout) {
        return new SampleClassFactory($log, $timeout);
    }
}

export default SampleClassFactory;
