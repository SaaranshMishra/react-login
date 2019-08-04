import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LoginForm from './LoginForm';
import HomePage from './HomePage';
import SignUp from './SignUp';
import NotFound from './404.js';
import ProtectedRoute from './protectedroute';
import './App.css';
import Particles from 'react-particles-js';

const particleOptions = {
  particles: {
    number: {
      value: 150,
      density: {
        enable: true,
        value_area: 800
      }
    }
  },
  interactivity: {
    events: {
      onhover: {
        enable: true,
        mode: "repulse"
      }
    }
  } 
}

const App = () => {
  return (
    <div className="App">
      <Particles className="particles" params={particleOptions} />
      <h1>
        <span className="font-weight-bold text-center">website</span>.com
      </h1>
      <Switch>
        <Route exact path='/' component={LoginForm} />
        <ProtectedRoute path="/home" component={HomePage} />
        <Route path='/sign-up' component={SignUp} />
        <Route path='*' component={NotFound} />
      </Switch>   
    </div>
  );

}

export default App;
