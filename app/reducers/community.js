import {
    GET_EVENT_REQUEST,
    GET_EVENT_SUCCESS,
} from '../constants/CommunityPage'

const initialState = {
    data: {},
    loaded: false
};

export default function page(state = initialState, action) {
    switch (action.type) {
        case    GET_EVENT_REQUEST:
            return {...state};
        case    GET_EVENT_SUCCESS:
            return {...state, data: action.payload, loaded: true};
        default:
            return state;
    }
}
