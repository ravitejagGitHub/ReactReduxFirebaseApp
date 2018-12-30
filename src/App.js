import React, { Component } from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom'
import NavBar from './components/NavBar'

import './App.css';

import Home from './components/Home'
import About from './components/About'
import Post from './components/Post'


class App extends Component {
  render() {

    return (
      <div className="App">

        <BrowserRouter>
        <div>
        <NavBar />

          <Switch>
            <Route path="/Home" exact component={Home} />
            <Route path="/About" exact component={About} />
            <Route path="/:post_id" exact component={Post} />
          </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}


export default App;

