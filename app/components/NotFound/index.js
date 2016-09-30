import React, {Component} from 'react'
import {Link} from 'react-router'

export default class NotFound extends Component {
    render() {
        return (
            <div>
                Page Not Found. Back to <Link to='/'>main page?</Link>?
            </div>
        )
    }
}
