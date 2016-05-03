'use strict';

import http from 'http';
import httpProxy from 'http-proxy';
import services from './services';
import url from 'url';
import nodeStatic from 'node-static';
import path from 'path';
import fs from 'fs';

export default {
    start: (port) => {
        var proxy = httpProxy.createProxyServer();
        setup(proxy, port);
    }
};

function setup(proxy, port){

    // let staticPath = path.resolve(process.cwd(), '../../../', 'dist');
    let staticPath = path.resolve('../../../', 'dist');
    let fileServer = new nodeStatic.Server(staticPath, { cache: false });
    let server = http.createServer(function(req, res) {

        let pathName = url.parse(req.url).pathname;
        let serviceName = null;
        let parts =  pathName.split('/');

        if (parts.length > 0) {
            serviceName = pathName.split('/')[1];
        }

        let service = services.get(serviceName);

        if (service){
            proxy.web(req, res, {
                target: service.url
            });
        } else {
            // serve static
            req.addListener('end', function () {
                fileServer.serve(req, res, function (err, result) {
                    if (err) { // There was an error serving the file
                        console.error("Error serving " + req.url + " - " + err.message);

                        res.setHeader('Content-Type', 'text/html');
                        res.writeHead(404, {'Content-Type': 'text/plain'});
                        res.end('service not found:' + serviceName);
                        
                    } else {
                        // console.log(result);
                    }
                });
            }).resume();
        }

    });

    server.listen(port);

    console.log("listening on port " + port);
}



