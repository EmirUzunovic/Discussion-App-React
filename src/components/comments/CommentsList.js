import React from 'react'


const CommentsList = () => {
    return (
        <ul>
            <li key="docId">
            	<div className="card">
                    <div className="card-content">
                        <span className="card-title red-text lighten-1">Posted by: Author Name</span>
                        <p className=" grey-text"> Posted at: time</p>
                        <p className="grey-text"> Comment content ......</p>
                        <button className="btn red ligthen-1" lock="docId">Like</button>
                        <button className="btn red ligthen-1" lock="docId">Answered</button>
                    </div>
                </div>
            </li>
        </ul>
        
           
   
       
    )
}

export default CommentsList