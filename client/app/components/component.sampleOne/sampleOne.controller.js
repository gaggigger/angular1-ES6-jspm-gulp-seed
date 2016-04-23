
const MODEL                 = new WeakMap();

class SampleOneController {
	constructor($scope, ixSampleOneModel){
		this.name = 'sampleOneController';
        let vm = this;

        this.model = ixSampleOneModel.get( $scope.componentId ? $scope.componentId : 'ixSampleOneModel');
        MODEL.set(this, this.model);

        // ANGULAR ES6
        vm.input = '';
        MODEL.get(this).subscribeAngularES6Class().then(null, null, function(data) {
            vm.input = data;
        });

        // ANGULAR JOHN PAPA
        vm.papa = '';
        MODEL.get(this).subscribeJohnPapa().then(null, null, function(data) {
            vm.papa = data;
        });

        // ES6 ONLY
        vm.es6 = '';
        MODEL.get(this).subscribeES6().then(null, null, function(data) {
            vm.es6 = data;
        });

        $scope.$on('$destroy', function() {
            MODEL.delete(this)
        });
	}

    onClassChange() {
        // ANGULAR ES6
        MODEL.get(this).publisAngularES6Class(this.input);
    }

    onES6Change() {
        // ES6 ONLY
        MODEL.get(this).publishEs6(this.es6);
    }

    onPapaChange() {
        // ANGULAR JOHN PAPA
        MODEL.get(this).publshJohnPapa(this.papa);
    }

}

export default SampleOneController;
