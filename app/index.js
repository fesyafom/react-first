import 'babel-polyfill'
import React from 'react'
import {render} from 'react-dom'
import { createStore } from 'redux'
import { Provider }	from 'react-redux'
import routes from './routes'
import {Router, Route, IndexRoute, browserHistory} from 'react-router'
import configureStore from './store/configureStore'
import { ReduxAsyncConnect } from 'redux-connect'

const store = configureStore(window.__data);

render(
    <Provider store={store}>
        <Router	render={(props) => <ReduxAsyncConnect {...props}/>} history={browserHistory} routes={routes}/>
    </Provider>,
    document.getElementById('root')
);
