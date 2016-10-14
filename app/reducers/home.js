import {
    GET_EVENTS_REQUEST,
    GET_EVENTS_SUCCESS,
}    from '../constants/HomePage'

const initialState = {
    data: {},
    loaded: false
};

export default function main(state = initialState, action) {
    switch (action.type) {
        case    GET_EVENTS_REQUEST:
            return {...state};
        case    GET_EVENTS_SUCCESS:
            return {...state, data: action.payload, loaded: true};
        default:
            return state;
    }
}