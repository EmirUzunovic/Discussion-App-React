import React from 'react'
import { NavLink } from 'react-router-dom'

const SignedInLinks = () => {
    return (
        <div>
            <ul className="right hide-on-med-and-down valign-wrapper">
                <li><NavLink to = '/createdisc'>Create Discussion</NavLink></li>
                <li><a href ="/">Log Out</a></li>
                <li><a href ="/"><i className = "material-icons">home</i></a></li>
            </ul>
        
            <ul id="mobile-links" className="sidenav">
                <li><NavLink to = '/createdisc'>Create Discussion</NavLink></li>
                <li><a href ="/">Log Out</a></li>
                <li><a href ="/"><i className = "material-icons">home</i>Home</a></li>
            </ul>
            
            
        </div>
    )
}

export default SignedInLinks