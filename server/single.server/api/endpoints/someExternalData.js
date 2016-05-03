'use strict';

import bll from '../data/bll/someExternal.bll';
import restify from 'restify';
import {successResponse, errorResponse} from '../common/successResponse';

export default {

    setEndpoint: function(server){

        server.get('v1/data', function(req, res, next){
            
            let someParam = req.params.someParam;
            
            let p = bll.getData(someParam).then(
                function (data){
                    res.send(successResponse(data));
                })
                .catch(function(err){
                    res.send(errorResponse(err));
                });
            p.finally(next);
        });
    }

};


