const LOG                   = new WeakMap();

class <%= upCaseName %>Controller {
	constructor($log){
		this.name = '<%= name %>';
		LOG.set(this, $log);
		
		this.init();
	}
	
	init() {
		LOG.get(this).info('init');
	}
}


export default <%= upCaseName %>Controller;
