import React, { Component } from 'react'

class SignIn extends Component {
    
    state = {email: "",  password: ""}

    handlechange = (element) => {
        this.setState({[element.target.id] : element.target.value })
    }

    onsubmit = (element) => {
        element.preventDefault();
        console.log(this.state)
    }
    
    render(){
        return (
            <form id="login" className="container">
            <h4>Log In</h4>
            <div className ="input-field">
                <input type ="email" id="email" className="validate" onChange = {this.handlechange}/>
                <label htmlFor="email">Email</label>
            </div>
            <div className ="input-field">
                <input type ="password" id="password" onChange = {this.handlechange}/>
                <label htmlFor="name">Password</label>
            </div>
            <div className ="input-field">
                <button className ="btn red lighten-1" onClick = {this.onsubmit} >LogIn</button>
            </div>
            <div className ="center red-text">
                AutthError
            </div>
        </form>   
        )
    }

}

export default SignIn