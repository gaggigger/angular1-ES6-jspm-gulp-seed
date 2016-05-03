'use strict';

import restify from 'restify';
import CookieParser from 'restify-cookies';
import config from './common/apiConfig';
import each from 'lodash/each';
import path from 'path';

import someExternalData from './endpoints/someExternalData';

let endPoints = [
    someExternalData
];

export default {
    start: function(port){
        if (port === 443){
            // var https_server = restify.createServer(config.ssl.server_options);
            // setup(https_server, 443);
        } else {
            var server = restify.createServer();
            setup(server, port);
        }
    }
};

function setup(server, port){
    server.use(restify.bodyParser());
    server.use(restify.queryParser());
    server.use(restify.CORS(config.CORS.options));
    server.use(CookieParser.parse);

    setEndpoints(server);

    server.get(/\/?.*/, restify.serveStatic({
        directory: path.resolve(process.cwd(), '../../', 'dist'),
        default: 'index.html'
    }));

    server.listen(port, function() {
        console.log('%s listening at %s', server.name, server.url);
    });
}

function setEndpoints(server){
    each(endPoints, function(endpoint){
        endpoint.setEndpoint(server);
    });
}


