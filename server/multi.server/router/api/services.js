'use strict';

let services = {};

export default {
    add: function(service){
        services[service.name]  = service;
        console.log('service added', service);
    },
    
    remove: function(service){
        delete services[service.name];
        console.log('service removed', service);
    },
    
    get: function(serviceName){
        return services[serviceName];
    }
};
