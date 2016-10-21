import { showLoading, hideLoading } from 'react-redux-loading-bar'

const middleware = store => next => action => {
    if (action.type !== 'PROMISE') {
        return next(action);
    }

    const [startAction, successAction, failureAction] = action.actions;
    store.dispatch({
        type: startAction
    });
    store.dispatch(showLoading());
    action.promise.then((data) => store.dispatch({
        type: successAction,
        payload: data
    }), (error) => store.dispatch({
        type: failureAction,
        error
    }))
    .then(()=>store.dispatch(hideLoading()))

};

export default middleware;