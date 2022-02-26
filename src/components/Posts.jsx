import React from 'react'
import PostItem from './PostItem'
import { fetchPosts } from '../actions/postActions'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'


// export default class Posts extends React.Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             posts: []
//         }
//     }
//   
//     getPosts() {
//         fetch('https://jsonplaceholder.typicode.com/posts')
//             .then(res => res.json())
//             .then(data => 
//                 this.setState({ posts: data})
//             )
//     }
//    
//     componentDidMount() {
//         this.getPosts()
//     } 
//
//     render() {
//         let postItems
//         if (!this.state.posts || this.state.posts.length === 0) {
//             postItems = <h3>No Posts</h3>
//         } else {
//             postItems = this.state.posts.map((post, idx) => 
//                 <PostItem key={ idx } post={ post } />
//             )
//         }
//         return (
//             <div>
//                 <h2>Latest Posts</h2>
//                 <ul>
//                     { postItems }
//                 </ul>
//             </div>
//         )
//     }
// }
///////////////////////////////////////////////////////////////////

class Posts extends React.Component {
    /**
     * Redux, React-Redux, and Redux-Thunk
     */
    componentDidMount() {
        this.props.fetchPosts()
    }
    /*************** Legacy Code : Without constructor() ***************/
    // componentWillReceiveProps(nextProps) {
    //     if (nextProps.newPost.id !== this.props.newPost.id) {
    //     // if (this.props.newPost.title !== nextProps.newPost.title) {
    //         this.props.posts.unshift(nextProps.newPost)
    //     }
    // }
    /***** Replace componentWillReceiveProps(), but NOT SUFFICIENT *****/
    // componentDidUpdate(prevProps) {
    //     if (prevProps.newPost.id !== this.props.newPost.id) {
    //         this.props.posts.unshift(this.state.newPost)
    //     }
    // }

    render() {
        let postItems
        if (!this.props.posts || this.props.posts.length === 0) {
            postItems = <h3>No Posts</h3>
        } else {
            postItems = this.props.posts.map((post, idx) => 
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

/**
 * connect(mapStateToProps, mapDispatchToProps)(Component)
 */
const mapStateToProps = state => (
    {   
        // < state.posts > from '../reducers/index.js'
        // < state.posts.items > and < state.posts.item > from '../reducers/postReducer.js'
        posts: state.posts.items, 
        newPost: state.posts.item 
    } 
)
const mapDispatchToProps = {
    fetchPosts
}

Posts.propTypes = {
    posts: PropTypes.array.isRequired,
    newPost: PropTypes.object.isRequired,
    fetchPosts: PropTypes.func.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(Posts)