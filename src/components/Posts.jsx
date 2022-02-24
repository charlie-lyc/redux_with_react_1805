import React from 'react'

import PostItem from './PostItem'


export default class Posts extends React.Component {
    
    constructor(props) {
        super(props)
        this.state = {
            posts: []
        }
    }

    getPosts() {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(data => this.setState({ posts: data}))
    }

    componentDidMount() {
        this.getPosts()
    }

    render() {
        let postItems
        if (!this.state.posts || this.state.posts.length === 0) {
            postItems = <h3>No Posts</h3>
        } else {
            postItems = this.state.posts.map((post, idx) => 
                <PostItem key={ idx } post={ post } />
            )
        }
        return (
            <div>
                <h2>Latest Posts</h2>
                <ul>
                    { postItems }
                </ul>
            </div>
        )
    }
}