'use strict';

import server from './server';
import sql from 'mssql';
import config from './common/apiConfig';
import socketClient from './socketClient';

let port = 8283;

let discoveryInfo = {
    name: 'serverTwo',
    url: 'http://localhost:' + port
};

server.start(port, discoveryInfo.name);
// server.start(443);

socketClient.connect('http://localost:9000', discoveryInfo);

// global connection pool
// connection = new sql.Connection(config.sms);
// create one connection
// connection.connect(function(){});
