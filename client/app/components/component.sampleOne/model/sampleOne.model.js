import createES6Factory from '../../../services/factory.es6/es6.factory.js';

const LOG       = new WeakMap();
const Q        = new WeakMap();

const SAMPLE_CLASS_SERVICE  = new WeakMap();
const JOHN_PAPA_SERVICE     = new WeakMap();
const ES6_FACTORY           = new WeakMap();

class SampleOneModel {
    constructor(componentId, $log, $q, angularES6Class, johnPapaService) {
        this.id = componentId;
        LOG.set(this, $log);
        Q.set(this, $q);

        this.subscriberAngularES6Class = null;
        this.subscriberES6 = null;
        this.subscriberJohnPapa = null;

        SAMPLE_CLASS_SERVICE.set(this, angularES6Class);
        JOHN_PAPA_SERVICE.set(this, johnPapaService);

        let ex6Factory = createES6Factory();
        ES6_FACTORY.set(this, ex6Factory);
    }

    subscribeAngularES6Class() {
        let deferred = this.subscriberAngularES6Class = Q.get(this).defer();

        SAMPLE_CLASS_SERVICE.get(this).subscribe(this.id, function(data) {
            deferred.notify(data);
        });

        return this.subscriberAngularES6Class.promise;
    }

    publisAngularES6Class(data) {
        SAMPLE_CLASS_SERVICE.get(this).publish(this.id, data);
    }

    subscribeES6() {
        let deferred = this.subscriberES6 = Q.get(this).defer();

        ES6_FACTORY.get(this).subscribe(this.id, function(data) {
            deferred.notify(data);
        });

        return this.subscriberES6.promise;
    }

    publishEs6(data) {
        ES6_FACTORY.get(this).publish(this.id, data);
    }

    subscribeJohnPapa() {
        let deferred = this.subscriberJohnPapa = Q.get(this).defer();

        JOHN_PAPA_SERVICE.get(this).subscribe(this.id, function(data) {
            deferred.notify(data);
        });

        return this.subscriberJohnPapa.promise;
    }

    publishJohnPapa(data) {
        JOHN_PAPA_SERVICE.get(this).publish(this.id, data);
    }
}

export default SampleOneModel;
