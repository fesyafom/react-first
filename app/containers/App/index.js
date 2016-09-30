import React, {Component} from 'react'
import { bindActionCreators } from 'redux'
import {Link} from 'react-router'
import { connect }	from 'react-redux'

export default class App extends Component {
    render() {
        return (
            <div>
                <h2>Header</h2>
                <Link to='/'>Home</Link>
                <hr></hr>

                {this.props.children}
            </div>
        )
    }
}


