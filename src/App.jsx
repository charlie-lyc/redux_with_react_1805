import React from 'react'

import Posts from './components/Posts'
import AddPost from './components/AddPost'
///////////////////////////////////////////////////


export default class App extends React.Component {

    render() {
        return (
            <div>
                <h1>Blog Website</h1>
                <hr />
                <AddPost />
                <hr />
                <Posts />
            </div>
        )
    }
}