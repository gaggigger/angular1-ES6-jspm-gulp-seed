'use strict';

import http from 'http';
import httpProxy from 'http-proxy';
import services from './services';
import url from 'url';
import path from 'path';
import fs from 'fs';

export default {
    start: (port) => {
        var proxy = httpProxy.createProxyServer();
        setup(proxy, port);
    }
};

function setup(proxy, port){

    var server = http.createServer(function(req, res) {

        let pathName = url.parse(req.url).pathname;
        let serviceName;
        let parts =  pathName.split('/');

        if (parts.length > 0) {
            serviceName = pathName.split('/')[1];
        }

        let service;

        if (serviceName === 'public' || serviceName === 'assets' || serviceName === 'fonts' || pathName === '/') {

            let staticPath = path.resolve(process.cwd(), '../../../', 'dist');

            let file = parts[parts.length - 1];

            if (file.length === 0) {
                file = 'index.html';
            }

            let filePath = path.join(staticPath, file);

            switch (serviceName) {
                case 'assets':
                    filePath = path.join(staticPath, pathName);
                    break;
                case 'fonts':
                    filePath = path.join(staticPath, pathName);
                    break;
                default:
                    filePath = path.join(staticPath, file);
            }

            let extname = path.extname(filePath);
            let contentType = 'text/html';
            switch (extname) {
                case '.js':
                    contentType = 'text/javascript';
                    break;
                case '.css':
                    contentType = 'text/css';
                    break;
                case '.json':
                    contentType = 'application/json';
                    break;
                case '.png':
                    contentType = 'image/png';
                    break;
                case '.jpg':
                    contentType = 'image/jpg';
                    break;
                case '.wav':
                    contentType = 'audio/wav';
                    break;
                case '.svg':
                    contentType = 'image/svg+xml';
                    break;
            }

            fs.readFile(filePath, function(error, content) {
                if (error) {
                    if(error.code == 'ENOENT'){
                        fs.readFile('./404.html', function(error, content) {
                            res.writeHead(200, { 'Content-Type': contentType });
                            res.end(content, 'utf-8');
                        });
                    }
                    else {
                        res.writeHead(500);
                        res.end('Sorry, check with the site admin for error: '+error.code+' ..\n');
                        res.end();
                    }
                }
                else {
                    res.writeHead(200, { 'Content-Type': contentType });
                    res.end(content, 'utf-8');
                }
            });

        } else {

            service     = services.get(serviceName);

            if (service){
                proxy.web(req, res, {
                    target: service.url
                });
            } else {
                res.setHeader('Content-Type', 'text/html');
                res.writeHead(404, {'Content-Type': 'text/plain'});
                res.end('service not found:' + serviceName);
            }
        }

    });

    server.listen(port);

    console.log("listening on port " + port);
}



