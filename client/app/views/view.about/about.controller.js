const LOG = new WeakMap();

class AboutController {
    constructor($log){
        this.name = 'about.controller';

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

export default AboutController;
