const LOG = new WeakMap();

class <%= InitialCaseName %>Controller {
    constructor($log){
        this.name = '<%= name %>.controller';

        LOG.set(this, $log);

        this.init();
    }

    init() {
        LOG.get(this).log("instantiating " + this.name);
    }

    sendToConsole() {
        LOG.get(this).log('sending to console');
    }
}

export default <%= InitialCaseName %>Controller;
