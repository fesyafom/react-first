import {
    GET_EVENT_REQUEST,
    GET_EVENT_SUCCESS,
    GET_EVENT_FAIL
} from '../constants/CommunityPage'

function getData(dispatch,url) {
    var data =
        fetch(url)
            .then(
                function(response) {
                    if (response.status !== 200) {
                        dispatch({
                            type: GET_EVENT_FAIL,
                            payload: data
                        });
                        return;
                    }

                    response.json().then(function(result) {
                        dispatch({
                            type: GET_EVENT_SUCCESS,
                            payload: result
                        });
                    });
                }
            )
            .catch(function(err) {
                dispatch({
                    type: GET_EVENT_FAIL,
                    payload: new Error(err)
                });
            });

}


export function getEvents(url) {
    return (dispatch) => {
        dispatch({
            type: GET_EVENT_REQUEST,
            payload: url
        });

        getData(dispatch,url);
    }
}
