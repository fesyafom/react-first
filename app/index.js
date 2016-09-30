import 'babel-polyfill'
import React from 'react'
import {render} from 'react-dom'
import { createStore } from 'redux'
import { Provider }	from 'react-redux'
import { routes } from './routes'
import {Router, Route, IndexRoute, browserHistory} from 'react-router'
import configureStore from './store/configureStore'

const store = configureStore();

render(
    <Provider store={store}>
        <Router	history={browserHistory} routes={routes}/>
    </Provider>,
    document.getElementById('root')
);

