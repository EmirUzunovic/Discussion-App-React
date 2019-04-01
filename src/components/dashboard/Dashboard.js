import React from 'react'
import Notifications from './Notifications'
import DiscussionList from '../discussion/DiscussionList'


const Dashboard = () => {
    return (
        <div className="container row">
            <DiscussionList />
            <Notifications />
        </div>
    )
}

export default Dashboard