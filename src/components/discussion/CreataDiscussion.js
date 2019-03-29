import React, { Component } from 'react'

class CreateDiscussion extends Component {
    state = {title: "",  content: ""}

    handlechange = (element) => {
        this.setState({[element.target.id] : element.target.value })
    }

    onsubmit = (element) => {
        element.preventDefault();
        console.log(this.state)
    }

    render(){
        return (
        <form id= "newDiscussion" className="container">
            <h4>Create new Discussion</h4>
            <div className ="input-field">
                <input type="text" id="title" name="title" onChange = {this.handlechange}/>
                <label className="active" htmlFor="discussionTitle">Discussion Title</label>
            </div>
            <div className="input-field">
                <textarea type="text" id="content" name="content" className="materialize-textarea" onChange = {this.handlechange}></textarea>
                <label className="active" htmlFor="discussionContent">Discussion Content</label>
            </div>
            <div className="input-field">
                <button className="btn red lighten-1" onClick = {this.onsubmit} >Create</button>
            </div>
        </form> 
        )
    }
}

export default CreateDiscussion