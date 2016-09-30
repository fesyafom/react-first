import {
    GET_EVENTS_REQUEST,
    GET_EVENTS_SUCCESS,
    GET_EVENTS_FAIL
} from    '../constants/HomePage'

function getData(dispatch,url) {
    var data =
        fetch(url)
            .then(
                function(response) {
                    if (response.status !== 200) {
                        dispatch({
                            type: GET_EVENTS_FAIL,
                            payload: data
                        });
                        return;
                    }

                    response.json().then(function(result) {
                        dispatch({
                            type: GET_EVENTS_SUCCESS,
                            payload: result
                        });
                    });
                }
            )
            .catch(function(err) {
                dispatch({
                    type: GET_EVENTS_FAIL,
                    payload: data
                });
            });

}


export function getEvents(url) {
    return (dispatch) => {
        dispatch({
            type: GET_EVENTS_REQUEST,
            payload: url
        });

        getData(dispatch,url);
    }
}
