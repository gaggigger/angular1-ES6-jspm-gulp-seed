
const LOG = new WeakMap();
const Q = new WeakMap();

class <%= camelCaseName %>Factory {
	constructor($log, $q) {
		this.name = '<%= name %>.factory';

		LOG.set(this, $log);
		Q.set(this, $q);


		this._data = 'bar'
	}

	get data() {
		return this._data;
	}

	set data(val) {
		this._data = val;
	}

	static factory($log, $q) {
		return new <%= camelCaseName %>Factory($log, $q);
	}
}


export default <%= camelCaseName %>Factory;
