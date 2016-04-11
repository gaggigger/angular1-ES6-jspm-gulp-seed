class ComUixValidateNumberFactory {
	constructor($log) {
		this.name = 'com.uix.validate.number';
		this.$log = $log;
		this._data = 'bar'
	}

	get data() {
		return this._data;
	}

	set data(val) {
		this._data = val;
	}

	static factory($log) {
		return new ComUixValidateNumberFactory($log);
	}
}


export default ComUixValidateNumberFactory;
