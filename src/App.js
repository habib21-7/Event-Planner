import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link,Redirect } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Section from './components/Section';

function App() {

  
  return (
    <div>
    <Router>
    <Switch>
    <Route exact path='/' component={Home} />
    <Route path='/login' component={Login} />
    </Switch>
    </Router>
    </div>
   
  );
}

export default App;
