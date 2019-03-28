import React from 'react'
import { NavLink } from 'react-router-dom'

const SignedOutLinks = () => {
    return (
        <div>
            <h4>SignedOutLinks</h4>
            <NavLink to = '/signIn'>Sign In</NavLink>
            <NavLink to = '/signUp'>Sign Up</NavLink>
        </div>
    )
}

export default SignedOutLinks