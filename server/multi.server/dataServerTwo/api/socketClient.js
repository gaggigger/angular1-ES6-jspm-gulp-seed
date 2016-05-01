'use strict';

import Promise from 'bluebird';
import websocket from 'websocket';

let interval;

export default {
    connect: connect
};

function connect(url, discoveryInfo){
    return new Promise(function(resolve, reject){
        let WebSocketClient = websocket.client;

        let client = new WebSocketClient();

        client.on('connectFailed', function(error) {
            console.log('Connect Error: ' + error.toString());
            attemptReconnect(url, discoveryInfo);
        });

        client.on('connect', function(connection) {
            resolve('WebSocket Client Connected');

            console.log('WebSocket Client Connected');

            connection.on('error', function(error) {
                console.log("Connection Error: " + error.toString());
            });

            connection.on('close', function() {
                console.log('socket Connection Closed');
                attemptReconnect(url, discoveryInfo);
            });

            connection.on('message', function(message) {
                if (message.type === 'utf8') {
                    console.log("Received: '" + message.utf8Data + "'");
                }
            });

            function sendServiceDiscoveryInfo() {
                if (connection.connected) {
                    connection.sendUTF(JSON.stringify(discoveryInfo));
                }
            }
            sendServiceDiscoveryInfo();
        });

        client.connect('ws://localhost:9000/', 'echo-protocol');
    });
}

function attemptReconnect(url, discoveryInfo){
    if (interval && interval._repeat) return;
    interval = setInterval(function(){
        console.log('attempting reconnection');
        connect(url, discoveryInfo)
            .then(function(){
                clearInterval(interval);
            })
            .catch(function(){

            });
    }, 4000);
}

