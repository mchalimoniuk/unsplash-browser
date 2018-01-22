import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import PhotoRoute from '../routes/photo';
import SectionRoute from '../routes/section';
import SectionsRoute from '../routes/sections';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Switch>
          <Route exact path='/' component ={SectionsRoute} />
          <Route path='/sections/:id' component ={SectionRoute} />
          <Route path='/photos/:id' component ={PhotoRoute} />
        </Switch>
      </div>
    );
  }
}

export default App;
