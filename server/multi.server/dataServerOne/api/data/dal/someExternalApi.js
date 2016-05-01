'use strict';

import restify from 'restify';
import sql from 'mssql';
import Promise from "bluebird";

export default {

    getData: function(someParam){
        return new Promise(function(resolve, reject){

            // Make external call here
            if (someParam) {
                resolve({
                    id:someParam});
            } else {
                reject('error');
            }


        });

    },



};
