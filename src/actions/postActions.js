import { FETCH_POSTS, CREATE_POST } from "./actionsTypes"


export const fetchPosts = () => dispatch => {
    // console.log('action fetching...')
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => dispatch({
            type: FETCH_POSTS,
            payload: data
        }))
}

export const createPost = post => dispatch => {
    fetch('https://jsonplaceholder.typicode.com/posts',{
            method: 'POST',
            headers: { 'Content-Type': 'application/json; charset=UTF-8'},
            body: JSON.stringify(post)
        })
        .then(res => res.json())
        .then(data => dispatch({
            type: CREATE_POST,
            payload: data
        }))
}