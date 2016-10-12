import React from 'react'
import {Route, IndexRoute}    from    'react-router'
import App from './containers/App'
import Home from './components/Home'
import Community from './components/Community'
import NotFound	from './components/NotFound'

export default (
    <Route component={App}>
        <Route path='/'>
            <IndexRoute component={Home}/>
            <Route path=':community' component={Community}/>
        </Route>
        <Route	path='*' component={NotFound}/>
    </Route>
);
