import {
    GET_EVENT_REQUEST,
    GET_EVENT_SUCCESS,
    GET_EVENT_FAIL
} from '../constants/CommunityPage'
import fetch from 'isomorphic-fetch'

export function getEvents(url) {
    return {
        type: 'PROMISE',
        actions: [GET_EVENT_REQUEST, GET_EVENT_SUCCESS, GET_EVENT_FAIL],
        promise: getFromAPI(url)
    };
}

function getFromAPI (url) {
    return fetch(url)
        .then((response) => response.json());
}