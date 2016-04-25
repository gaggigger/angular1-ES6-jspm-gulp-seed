const LOG       = new WeakMap();
const Q        = new WeakMap();

class <%= InitialCaseName %>Model {
    constructor(componentId, $log, $q) {
        this.id = componentId;
        LOG.set(this, $log);
        Q.set(this, $q);

        this.init('<%= name %>Model init()');
    }

    init(value) {
        LOG.get(this).info(value);
    }
}

export default <%= InitialCaseName %>Model;
