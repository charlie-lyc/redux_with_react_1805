import { FETCH_POSTS, CREATE_POST, ADD_POST } from "./actionsTypes"


export const fetchPosts = () => dispatch => {
    // console.log('action fetching...')
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => dispatch({
            type: FETCH_POSTS,
            payload: data
        }))
}

export const createPost = newPost => dispatch => {
    fetch('https://jsonplaceholder.typicode.com/posts',{
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify(newPost)
        })
        .then(res => res.json())
        .then(data => dispatch({
            type: CREATE_POST,
            payload: data
        }))
}

export const addPost = post => dispatch => {
    dispatch({
        type: ADD_POST,
        payload: post
    })
}