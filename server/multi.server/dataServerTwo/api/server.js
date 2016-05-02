'use strict';

import restify from 'restify';
import CookieParser from 'restify-cookies';
import config from './common/apiConfig';
import each from 'lodash/each';

import someExternalData from './endpoints/someExternalData';


let endPoints = [
    someExternalData
];

export default {
    start: function(port, endpointPrefix){
        if (port === 443){
            // var https_server = restify.createServer(config.ssl.server_options);
            // setup(https_server, 443);
        } else {
            var server = restify.createServer();
            setup(server, port, endpointPrefix);
        }
    }
};

function setup(server, port, endpointPrefix){
    server.use(restify.bodyParser());
    server.use(restify.queryParser());
    server.use(restify.CORS(config.CORS.options));
    server.use(CookieParser.parse);

    server.listen(port, function() {
        console.log('%s listening at %s', server.name, server.url);
    });

    setEndpoints(server, endpointPrefix);
}

function setEndpoints(server, endpointPrefix){
    each(endPoints, function(endpoint){
        endpoint.setEndpoint(server, endpointPrefix);
    });
}


