import React from 'react'
import Notifications from './Notifications'
import DiscussionList from '../discussion/DiscussionList'


const Dashboard = () => {
    return (
        <div>
            <h4>This is Dashboard</h4>
            <DiscussionList />
            <Notifications />
        </div>
    )
}

export default Dashboard