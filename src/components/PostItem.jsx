import React from 'react'
import PropTypes from 'prop-types'


export default class PostItem extends React.Component {
    render() {
        return (
            <li>
                <h3>{ this.props.post.title }</h3>
                <p>{ this.props.post.body }</p>
            </li>
        )
    }
}


PostItem.propTypes = {
    post: PropTypes.object
}
