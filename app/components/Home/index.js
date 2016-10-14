import React, {Component} from 'react'
import { bindActionCreators } from 'redux'
import { connect } from	'react-redux'
import * as pageActions from '../../actions/HomeActions'
import Item from './Item'
import { asyncConnect } from 'redux-connect'

@asyncConnect([{
    promise: ({ params, store: { dispatch, getState } }) => {
        if(!getState().main.loaded) {
            let events = pageActions.getEvents('http://api.itboost.org:88/app_dev.php/api/event.getPopular');
            dispatch(events);
            return events.promise;
        }

    }
}])

@connect(state => ({ main: state.main }), dispatch => ({pageActions: bindActionCreators(pageActions, dispatch)}))

export default class Home extends Component {
    render() {
        var	newsTemplate;
        if (Object.keys(this.props.main.data).length !== 0) {
            newsTemplate = this.props.main.data.response.map((item) => {
                return (
                    <Item key={item.id} data={item}/>
                )
            })
        } else {
            newsTemplate = <p>Loading...</p>
        }

        return (
            <div>
                <ul>
                    {newsTemplate}
                </ul>
            </div>
        )
    }
}
