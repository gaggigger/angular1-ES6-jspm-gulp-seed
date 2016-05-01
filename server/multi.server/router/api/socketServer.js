'use strict';

import services from './services';
import websocket from 'websocket';
import http from 'http';

// WebSocket server.  Services connect to these

export default {
   start: start
};


function start(port){
    let WebSocketServer = websocket.server;

    let server = http.createServer(function(request, response) {
        console.log((new Date()) + ' Received request for ' + request.url);
        response.writeHead(404);
        response.end();
    });
    server.listen(port, function() {
        console.log('Socket Server is listening on port ' + port + '. API services connect to this port.');
    });

    let wsServer = new WebSocketServer({
        httpServer: server,
        // You should not use autoAcceptConnections for production
        // applications, as it defeats all standard cross-origin protection
        // facilities built into the protocol and the browser.  You should
        // *always* verify the connection's origin and decide whether or not
        // to accept it.
        autoAcceptConnections: false
    });

    function originIsAllowed(origin) {
        // put logic here to detect whether the specified origin is allowed.
        return true;
    }

    wsServer.on('request', function(request) {
        if (!originIsAllowed(request.origin)) {
            // Make sure we only accept requests from an allowed origin
            request.reject();
            console.log((new Date()) + ' Connection from origin ' + request.origin + ' rejected.');
            return;
        }

        var connection = request.accept('echo-protocol', request.origin);

        console.log('Connection accepted.');

        connection.on('message', function(message) {
            if (message.type === 'utf8') {
                var service = JSON.parse(message.utf8Data);
                if (service.name && service.url){
                    services.add(service);
                    connection.client = service;
                    connection.sendUTF("welcome " + service.name + ' service');
                }
            }
        });

        connection.on('close', function(reasonCode, description) {
            console.log('connection closed:', connection.client);
            services.remove(connection.client);
        });
    });
}


