import React from 'react'
import { NavLink } from 'react-router-dom'

const SignedOutLinks = () => {
    return (
        <div>   
            <ul className="right hide-on-med-and-down valign-wrapper">    
                <li><NavLink to = '/signIn'>Sign In</NavLink></li>
                <li><NavLink to = '/signUp'>Sign Up</NavLink></li>   
                <li><a href ="/" ><i className = "material-icons">home</i></a></li>
            </ul>
            
            <ul id="mobile-links" className="sidenav">
                <li><NavLink to = '/signIn'>Sign In</NavLink></li>
                <li><NavLink to = '/signUp'>Sign Up</NavLink></li>
                <li><a href ="/"><i className = "material-icons">home</i></a></li>
            </ul>
        </div>
    )
}

export default SignedOutLinks