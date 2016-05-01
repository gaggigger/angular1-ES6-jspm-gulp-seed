'use strict';

import fs from 'fs';

export default {

    db: {
        user: 'someuser',
        password: 'password',
        server: 'url',
        database: 'dbName',
        pool: {
            max: 10,
            min: 0,
            idleTimeoutMillis: 30000
        }
    },

    ssl: {
        server_options: {
            // cert: fs.readFileSync('/private/etc/apache2/ssl/auth.com.crt'),
            // key: fs.readFileSync('/private/etc/apache2/ssl/auth.com.key')
        }
    },

    CORS: {
        options: {
            // Defaults to ['*'].
            origins: ['https://localhost:8000', 'http://localhost:1337'],

            // Defaults to false.
            credentials: true

            // Sets expose-headers.
            // headers: ['x-foo']
        }
    },

    longTermToken: {
        secret: 'shhhhhhhhhh',

        default_options: {
            expiresIn: '1d'  // see https://github.com/rauchg/ms.js for time settings
        },

        remember_me_options: {
            expiresIn: '180d'  // see https://github.com/rauchg/ms.js for time settings
        }
    },

    shortTermToken: {
        secret: 'do not tell anybody!',

        options: {
            expiresIn: '1h'  // see https://github.com/rauchg/ms.js for time settings
        }

    }
};
