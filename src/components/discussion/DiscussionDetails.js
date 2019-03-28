import React from 'react'
import CommentsList from '../comments/CommentsList'
import AddComment from '../comments/AddComment'

const DiscussionDetails = () => {
    return (
        <div>
            <h4>This is DiscussionDetails</h4>
            <CommentsList />
            <AddComment />
        </div>
    )
}

export default DiscussionDetails