import React from 'react'

import DiscussionSummary from './DiscussionSummary'

const DiscussionList = () => {
    return (
        <div className="col s12 m6">
            <h2>My Discussions</h2>
            <ul id="discusions">
                    <DiscussionSummary />
            </ul>
            
        </div>
    )
}

export default DiscussionList