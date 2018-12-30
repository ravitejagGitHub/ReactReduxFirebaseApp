import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Dashboard from './components/dashboard/Dashboard';
import Navbar from './components/layout/Navbar';
import ProjectDetails from './components/projects/ProjectDetails';
import SignIn from './components/auth/SingIn';
import SignUp from './components/auth/SignUp';
import CreateProject from './components/projects/CreateProject';

import './index.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="FirebaseReduxApp">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route path="/projects/:id" component={ProjectDetails} />
            <Route path="/signin" component= {SignIn} />
            <Route path="/signup" component= {SignUp} />
            <Route path="/create" component= {CreateProject} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}


export default App;

