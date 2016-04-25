const LOG                   = new WeakMap();
const MODEL                 = new WeakMap();

class <%= InitialCaseName %>Controller {
	constructor($scope, $log, <%= name %>Model){
		this.name = '<%= name %>';
		LOG.set(this, $log);

		this.model = <%= name %>Model.get( $scope.componentId ? $scope.componentId : '<%= name %>Model');
		MODEL.set(this, this.model);

		this.init();
	}

	init() {
		LOG.get(this).info('init');
	}
}

export default <%= InitialCaseName %>Controller;
