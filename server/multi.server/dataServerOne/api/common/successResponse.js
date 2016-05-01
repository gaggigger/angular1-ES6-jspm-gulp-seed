'use strict';

export function successResponse(obj){
    return {
        status: 'success',
        data: obj
    }
}

export function errorResponse(obj) {
    return {
        status: 'error',
        data: obj
    }
}
