import React from 'react'
import PropTypes from 'prop-types'


class PostItem extends React.Component {
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
    post: PropTypes.object.isRequired
}


export default PostItem