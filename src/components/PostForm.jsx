import React from 'react'
import { connect } from 'react-redux'
import { createPost } from '../actions/postActions'
import PropTypes from 'prop-types'


class PostForm extends React.Component {
// export default class PostForm extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            title: '',
            body: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    // handleSubmit(e) {
    //     e.preventDefault()
    //     if (!this.state.title || !this.state.body) {
    //         return alert('Please Endter Title and Body')
    //     }
    //     const newPost = {
    //         title: this.state.title,
    //         body: this.state.body
    //     }
    //     fetch('https://jsonplaceholder.typicode.com/posts', {
    //             method: 'POST',
    //             headers: { 'Content-Type': 'application/json; charset=UTF-8' },
    //             body: JSON.stringify(newPost)
    //         })
    //         .then(res => res.json())
    //         .then(data => { 
    //             // console.log(data) 
    //         })
    //     this.setState({
    //         title: '',
    //         body: ''
    //     })
    // }
    //////////////////////////////////////////////////////////
    /**
     * Redux, React-Redux, and Redux-Thunk
     */
    handleSubmit(e) {
        e.preventDefault()
        if (!this.state.title || !this.state.body) {
            return alert('Please Enter Title and Body')
        } 
        const newPost = {
            title: this.state.title,
            body: this.state.body
        }
        this.props.createPost(newPost)
        this.setState({
            title: '',
            body: ''
        })
    }

    render() {
        return (
            <form onSubmit={ this.handleSubmit }>
                <div>
                    <label htmlFor="title">Title &nbsp;: </label>
                    <br />
                    <input type="text" name="title" onChange={ this.handleChange } value={ this.state.title }/>
                </div>
                <br />
                <div>
                    <label htmlFor="body">Body : </label>
                    <br />
                    <textarea name="body" cols="50" rows="10" onChange={ this.handleChange } value={ this.state.body }></textarea>
                </div>
                <br />
                <input type="submit" value="Submit" />
            </form>
        )
    }
}           


// export default PostForm

/////////////////////////////////////////////////////////////////////
const mapDispatchToProps = {
    createPost
}

PostForm.propTypes = {
    createPost: PropTypes.func.isRequired
}

export default connect(null, mapDispatchToProps)(PostForm)