import React from 'react'
import CommentsList from '../comments/CommentsList'
import AddComment from '../comments/AddComment'

const DiscussionDetails = () => {
    return (
        <div>
            <div className = "container">
                <div className="card blue z-depth-1">
                    <div className="card-content white-text">
                        <span className="card-title">Ime Diskusije</span>
                        <p>malo detaljnije opisana diskusija</p>
                        <p>Posted by:project author First Name project author Last Name </p>
                        <p>Posted by: moment toDate </p>
                        <a href="#" className="btn"><span>Go back</span><i className = "material-icons right">arrow_back_ios</i></a>
                    </div> 
                </div>
          
                <CommentsList />
            </div>
            <AddComment />
        </div>
    )
}

export default DiscussionDetails