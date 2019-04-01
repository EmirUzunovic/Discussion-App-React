import React from 'react'
import { Link } from 'react-router-dom'
const DiscussionSummary = () => {
    return (      
        <li>
            <Link to = {'/discussion/' + ':id'}>
           
                <div className="card blue white-text">
                    <div className="card-content">
                        <span className="card-title center-align">Topic title</span>
                        <button className ="btn-floating right center-align light red lighten-1 waves-effect waves-dark z-depth-0"><i className = "material-icons">delete</i></button>
                        <p className="truncate">Details on topic</p>
                        <p >Posted by: x.authorFirstName x.authorLastName</p>
                        <p>Time: moment(x.createdAt.toDate()).calendar</p>
                    </div>
                    
                </div>
            </Link>       
        </li>
    )
}

export default DiscussionSummary