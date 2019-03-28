import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Dashboard from './components/dashboard/Dashboard'
import DiscussionDetails from './components/discussion/DiscussionDetails'
import CreateDiscussion from './components/discussion/CreataDiscussion'
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'


//Route tag is setting up which component will be loaded corresponding to the path provided with Link or NavLink tag 
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Route exact path = '/' component = {Dashboard} />
          <Route path = '/discussion/:id' component = {DiscussionDetails} />
          <Route path = '/createdisc' component = {CreateDiscussion} />
          <Route path = '/signIn' component = {SignIn} />
          <Route path = '/signUp' component = {SignUp} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
