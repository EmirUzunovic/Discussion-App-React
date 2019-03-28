import React from 'react'
import { NavLink } from 'react-router-dom'

const SignedInLinks = () => {
    return (
        <div>
            <h4>SignedInLinks</h4>
            <NavLink to = '/createdisc'>Create Discussion</NavLink>
        </div>
    )
}

export default SignedInLinks