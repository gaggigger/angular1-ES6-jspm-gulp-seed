'use strict';

import sql from 'mssql';
import config from './common/apiConfig';
import server from './server';
import socketServer from './socketServer';

server.start(8000);

socketServer.start(9000);

// global connection pool
// connection = new sql.Connection(config.sms);
// create one connection
// connection.connect(function(){});
