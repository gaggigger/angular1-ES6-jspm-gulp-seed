'use strict';

import server from './server';
import sql from 'mssql';
import config from './common/apiConfig';

let port = 8000;

let discoveryInfo = {
    name: 'serverOne',
    url: 'http://localhost:' + port
};

server.start(port, discoveryInfo.name);
// server.start(443);


// global connection pool
// connection = new sql.Connection(config.sms);
// create one connection
// connection.connect(function(){});
