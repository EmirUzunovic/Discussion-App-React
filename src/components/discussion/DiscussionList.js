import React from 'react'
import { Link } from 'react-router-dom'

const DiscussionList = () => {
    return (
        <div>
            <h4>This is DiscussionList</h4>
            <Link to = {'/discussion/' + ':id'}>Discussion</Link>
        </div>
    )
}

export default DiscussionList