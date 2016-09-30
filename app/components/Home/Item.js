import React, {Component} from    'react'
import {Link} from 'react-router'

export default class Item extends Component {
    render() {
        return (
            <li>
                <Link to={"/" + this.props.data.id}>{this.props.data.name}</Link>
            </li>
        )
    }
}