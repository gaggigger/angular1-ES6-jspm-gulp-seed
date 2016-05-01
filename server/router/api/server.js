'use strict';

import http from 'http';
import httpProxy from 'http-proxy';
import services from './services';
import url from 'url';

export default {
    start: (port) => {
        var proxy = httpProxy.createProxyServer();
        setup(proxy, port);
    }
};

function setup(proxy, port){

    var server = http.createServer(function(req, res) {

        let pathname    = url.parse(req.url).pathname;
        let serviceName = pathname.split('/')[1];
        let service     = services.get(serviceName);

        if (service){
            proxy.web(req, res, {
                target: service.url
            });
        } else {
            res.setHeader('Content-Type', 'text/html');
            res.writeHead(404, {'Content-Type': 'text/plain'});
            res.end('service not found:' + serviceName);
        }


    });

    server.listen(port);

    console.log("listening on port " + port);
}



