
import './App.css';
import Dashboard from './components/Dashboard';
import HeaderComponent from './components/layout/HeaderComponent';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import AddProject from './components/projects/AddProject';
import { Provider } from 'react-redux';
import store from './store';
import UpdateProject from './components/projects/UpdateProject';
import React, { Component }  from 'react';

function App() {
  return (

    <Provider store={store}>
      <Router>
      <HeaderComponent/>
      <Route exact path="/dashboard" component={Dashboard}/>
      <Route exact path="/addProject" component={AddProject}/>
      <Route exact path="/updateProject/:id" component={UpdateProject}/>
      </Router>
    </Provider>
  
  );
}

export default App;
