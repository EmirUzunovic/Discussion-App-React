import React, { Component } from 'react'

class SignUp extends Component {
    state = {firstName: "", lastName: "", email: "",  password: ""}

    handlechange = (element) => {
        this.setState({[element.target.id] : element.target.value })
    }

    onsubmit = (element) => {
        element.preventDefault();
        console.log(this.state)
    }

    render(){
        return (
            <form className="container">
            <h4>Sign up</h4>
            <div className="input-field">
                <input type="text" id="firstName" className="validate" onChange = {this.handlechange}/>
                <label htmlFor="firstName">First Name</label>
            </div>
            <div className="input-field">
                <input type="text" id="lastName" className="validate" onChange = {this.handlechange}/>
                <label htmlFor="lastName">Last Name</label>
            </div>
            <div className="input-field">
                <input type="email" id="email" className="validate" onChange = {this.handlechange}/>
                <label htmlFor="email">Email</label>
            </div>
            <div className="input-field">
                <input type="password" id="password" onChange = {this.handlechange}/>
                <label htmlFor="name">Password</label>
            </div>
            <div className="input-field">
                <button className="btn red lighten-1" onClick = {this.onsubmit}>Sign up</button>
            </div>
            <div className="center red-text">
                AuthError
            </div>
        </form> 
        )
    }
}


export default SignUp