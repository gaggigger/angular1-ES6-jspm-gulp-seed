class <%= camelCaseName %>Factory {
	constructor($log) {
		this.name = '<%= name %>';
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
		return new <%= camelCaseName %>Factory($log);
	}
}


export default <%= camelCaseName %>Factory;
