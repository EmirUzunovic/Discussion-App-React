import React, { Component } from 'react'

class AddComments extends Component {
    state = {  content: ""}

    handlechange = (element) => {
        this.setState({[element.target.id] : element.target.value })
    }

    onsubmit = (element) => {
        element.preventDefault();
        console.log(this.state)
    }

    render(){
        return (
        <div id="comment" className="z-depth-5 white">
            <form id="newComment" className= "container row valign-wrapper">
    
                <div className ="input-field col s10">
                    <textarea type="text" id="content" className="materialize-textarea" onChange = {this.handlechange}></textarea>
                    <label className="active" htmlFor="firstName">Comment</label>
                </div>
    
                <div className ="input-field col s2 center-align">
                    <button className ="btn-floating red lighten-1 z-depth-0" onClick = {this.onsubmit}><i className = "material-icons">send</i></button>
                </div>

            </form>
        </div>   
        )
    }
}

export default AddComments