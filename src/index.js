import React from 'react';
import ReactDOM from 'react-dom';
import { Route,  BrowserRouter as Router } from 'react-router-dom'
import './index.css';
import App from './App';
import Login from './components/Login/login';
import Signup from './components/Signup/Signup';
import Dashboard from './components/Dashboard/Dashboard';
import * as serviceWorker from './serviceWorker';
import Group from './components/Group/Group';
import Contact from './components/Contact/Contact';
import SendMessage from './components/Message/SendMessage';

const routing = (
  <Router>
    <div>
      <Route exact path="/" component={App} />   
      <Route path="/login" component={Login} />   
      <Route path="/signup" component={Signup} /> 
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/group" component={Group} />
      <Route path="/contact" component={Contact} />  
      <Route path="/message" component={SendMessage} />  
    </div>
  </Router>
)

ReactDOM.render(
  routing,  
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
