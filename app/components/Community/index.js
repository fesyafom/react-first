import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as pageActions from '../../actions/CommunityActions'

@connect(state => ({ page: state.page }), dispatch => ({pageActions: bindActionCreators(pageActions, dispatch)}))

export default class Community extends Component {
    componentDidMount()	{
        this.props.pageActions.getEvents('http://api.itboost.org:88/app_dev.php/api/event' + this.props.location.pathname);
    }

    render() {
        var	newsTemplate;
        if (this.props.page.loaded === true) {
            const event = this.props.page.data.response.event;
            newsTemplate = <div>
                <h1>{event.name}</h1>
                <p><img src={"http://api.itboost.org:88" + event.avatar.path} /></p>
                <div dangerouslySetInnerHTML={{__html: event.description}}></div>
            </div>
        } else {
            newsTemplate = <p>Loading...</p>
        }



        return (
            <div>
                {newsTemplate}
            </div>
        )
    }
}





