import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks' 
import M from 'materialize-css'
import 'materialize-css/dist/css/materialize.min.css'

class Navbar extends Component {
    componentDidMount() {
        //Auto initialize all the things!
        M.AutoInit();
    }

    componentDidUpdate(){
        //Auto initialize all the things!
        M.AutoInit();
    }

    render(){
        return (
            <nav className="nav-wrapper blue darken-2 ">
                <div className="container">
                    <Link to = '/' className="brand-logo">Discussion</Link>
                    <a href="/" className="sidenav-trigger left" data-target="mobile-links"><i className = "material-icons">menu</i></a>
                    <a href="/" className ="btn-floating right center-align light red lighten-1 waves-effect waves-dark z-depth-0">NN</a>
                    <SignedInLinks />
                    <SignedOutLinks />
                </div>
            </nav>

            )
        }
    
}

export default Navbar