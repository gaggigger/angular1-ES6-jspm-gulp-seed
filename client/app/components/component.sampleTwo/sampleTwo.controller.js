import es6Factory from 'app/services/factory.es6/es6.factory.js';

const LOG                   = new WeakMap();
const SAMPLE_CLASS_SERVICE  = new WeakMap();
const JOHN_PAPA_SERVICE     = new WeakMap();
const ES6_FACTORY           = new WeakMap();

class SampleTwoController {
	constructor($log, angularES6Class, johnPapaService){
		this.name = 'sampleTwoComponent';
        let vm = this;

        LOG.set(this, $log);
        SAMPLE_CLASS_SERVICE.set(this, angularES6Class);
        JOHN_PAPA_SERVICE.set(this, johnPapaService);


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
        ES6_FACTORY.set(this, es6Factory() );
        ES6_FACTORY.get(this).subscribe(this.name, function(data) {
            vm.es6 = data;
        });
	}

    onChange() {
        // ANGULAR ES6
        SAMPLE_CLASS_SERVICE.get(this).data = {
            id: this.name,
            data: this.input
        };

        // ANGULAR JOHN PAPA
        JOHN_PAPA_SERVICE.get(this).setData({
            id: this.name,
            data: this.papa
        });

        // ES6 ONLY
        ES6_FACTORY.get(this).data = {
            id: this.name,
            data: this.es6
        };
    }
}


export default SampleTwoController;
