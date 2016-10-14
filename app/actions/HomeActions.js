import {
    GET_EVENTS_REQUEST,
    GET_EVENTS_SUCCESS,
    GET_EVENTS_FAIL
} from    '../constants/HomePage'
import fetch from 'isomorphic-fetch'

export function getEvents(url) {
    return {
        type: 'PROMISE',
        actions: [GET_EVENTS_REQUEST, GET_EVENTS_SUCCESS, GET_EVENTS_FAIL],
        promise: getFromAPI(url)
    };
}

function getFromAPI (url) {
    return fetch(url)
        .then((response) => response.json());
}


