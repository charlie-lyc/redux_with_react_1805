import React from 'react'


export default class PostForm extends React.Component {

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

    handleSubmit(e) {
        e.preventDefault()
        const newPost = {
            title: this.state.title,
            body: this.state.body
        }
        fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json; charset=UTF-8' },
                body: JSON.stringify(newPost)
            })
            .then(res => res.json())
            .then(data => { 
                // console.log(data) 
            })
        e.target.title.value = ''
        e.target.body.value = ''
    }

    render() {
        return (
            <form onSubmit={ this.handleSubmit }>
                <div>
                    <label htmlFor="title">Title &nbsp;: </label>
                    <br />
                    <input type="text" name="title" onChange={ this.handleChange } />
                </div>
                <br />
                <div>
                    <label htmlFor="body">Body : </label>
                    <br />
                    <textarea name="body" cols="50" rows="10" onChange={ this.handleChange }></textarea>
                </div>
                <br />
                <input type="submit" value="Submit" />
            </form>
        )
    }
}           
