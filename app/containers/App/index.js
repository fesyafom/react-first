import React, {Component} from 'react'
import { bindActionCreators } from 'redux'
import {Link} from 'react-router'
import { connect }	from 'react-redux'
import LoadingBar from 'react-redux-loading-bar'

export default class App extends Component {
    render() {
        return (
            <div>
                <LoadingBar updateTime={50} maxProgress={95} progressIncrease={5} style={{top: 0, height: '2px'}}/>
                <h2>Header</h2>
                <Link to='/'>Home</Link>
                <hr></hr>

                {this.props.children}
            </div>
        )
    }
}


