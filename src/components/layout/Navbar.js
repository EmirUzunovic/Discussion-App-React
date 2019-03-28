import React from 'react'
import { Link } from 'react-router-dom'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks' 

const Navbar = () => {
    return (
        <div>
            <h4>This is Navbar component</h4>
            <Link to = '/home'>Home</Link>
            <SignedInLinks />
            <SignedOutLinks />
        </div>
    )
}

export default Navbar