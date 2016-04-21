import createES6Factory from '../../services/factory.es6/es6.factory.js';

const LOG                   = new WeakMap();
const SAMPLE_CLASS_SERVICE  = new WeakMap();
const JOHN_PAPA_SERVICE     = new WeakMap();
const ES6_FACTORY           = new WeakMap();

class SampleTwoController {
	constructor($log, $timeout, angularES6Class, johnPapaService){
		this.name = 'sampleTwoComponent';
        let vm = this;

        LOG.set(this, $log);
        SAMPLE_CLASS_SERVICE.set(this, angularES6Class);
        JOHN_PAPA_SERVICE.set(this, johnPapaService);

        let ex6Factory = createES6Factory();
        ES6_FACTORY.set(this, ex6Factory);

        // ANGULAR ES6
        vm.input = '';
        angularES6Class.subscribe(this.name, function(data) {
            vm.input = data;
        });


        // ANGULAR JOHN PAPA
        vm.papa = '';
        johnPapaService.subscribe(this.name, function(data) {
            vm.papa = data;
        });


        // ES6 ONLY
        vm.es6 = '';
        ex6Factory.subscribe(this.name, function(data) {
            $timeout(function() {
                vm.es6 = data;
            }, 0, true);
        });
	}

    onClassChange() {
        // ANGULAR ES6
        SAMPLE_CLASS_SERVICE.get(this).publish(this.name, this.input);
    }

    onES6Change() {
        // ES6 ONLY
        ES6_FACTORY.get(this).publish(this.input, this.es6);
    }

    onPapaChange() {
        // ANGULAR JOHN PAPA
        JOHN_PAPA_SERVICE.get(this).publish(this.name, this.papa);
    }
}


export default SampleTwoController;
