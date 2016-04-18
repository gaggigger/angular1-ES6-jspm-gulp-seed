const STATE_PROVIDER = new WeakMap();

class FlowProvider {
    constructor() {

        this._states = {};
        this._defaultUiView = 'content';

        this.$get = ['$state', '$log', function($state, $log) {

            let _self = this;
            
        }];
    }

    addStateProvider($stateProvider) {

        STATE_PROVIDER.set(this, $stateProvider);
       
        // Register unregestered states
        for (var stateName in this._states) {

            if (this._states.hasOwnProperty(stateName) && !this._states[stateName].isRegistered) {
                $stateProvider.state(stateName, this._states[stateName].state );
            }
        }
    }

    set defaultUiView(_uiView) {
        if (_uiView && _uiView.length) {
            this._defaultUiView = _uiView;
        }
    }
    
    buildState(_state) {
        let layout = _state.layout ? _state.layout : 'layoutHome';
        let uiView = _state.uiView ? _state.uiView : 'content';
        let stateName = layout + '.' + uiView;

        _state.name = stateName;
        
        let views = {
            
        }
        
        
    }
    
    saveState(_state) {
        // If not in cache, wrap and save to cache
        if (!this._states[stateName]) {
            this._states[stateName] = {
                isRegistered: false,
                state: _state
            };
        }
    }

    flow(_state) {
       
        

        

        // If $stateProvider is injected, register now
        let $stateprovider = STATE_PROVIDER.get(this);
        if ($stateprovider) {
            $stateprovider._states(_state.name, this._states[_state.name].state);

            // Flag as registered
            this._states[state.name].isRegistered = true;
        }
    }

    static factory() {
        return new FlowProvider();
    }
}
