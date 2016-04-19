const LOG = new WeakMap();
const SAMPLE_CLASS_SERVICE = new WeakMap();

class SampleOneController {
	constructor($log, sampleClassService){
		this.name = 'sampleOneController';
        let vm = this;
        vm.input = '';

		LOG.set(this, $log);
        SAMPLE_CLASS_SERVICE.set(this, sampleClassService);

        sampleClassService.subscribe(this.name, function(data) {
            vm.input = data;
        })
	}

    onChange() {
        SAMPLE_CLASS_SERVICE.get(this).data = {
            id: this.name,
            data: this.input
        };
    }
}

export default SampleOneController;
