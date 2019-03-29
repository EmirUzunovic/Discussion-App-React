import React from 'react'
import { Link } from 'react-router-dom'
import DiscussionSummary from './DiscussionSummary'

const DiscussionList = () => {
    return (
        <div>
            <h4>This is DiscussionList</h4>
            <Link to = {'/discussion/' + ':id'}>
                <DiscussionSummary />
            </Link>
        </div>
    )
}

export default DiscussionList