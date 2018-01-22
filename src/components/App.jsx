import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Navbar from './Navbar';
import PhotoRoute from '../routes/photo';
import SectionRoute from '../routes/section';
import SectionsRoute from '../routes/sections';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import '../assets/css/bootstrap.min.css';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
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
