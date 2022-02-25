import React from 'react'
import PostForm from './PostForm'


export default class AddPost extends React.Component {
    render() {
        return (
            <div>
                <h2>Add Post</h2>
                <PostForm />
            </div>
        )
    }
}