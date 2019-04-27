import React from 'react';
import './App.css';
import { Switch, Redirect, Route } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import Board from './components/Board';
import Navbar from './components/Navbar';

const App: React.FC = () => {
  return (
    <div className="App">
        <Navbar />
        <Switch>
            <Route path="/register" component={LoginForm} />   
            <Route path="/login" component={LoginForm} />
            <Route path="/board" component={Board} />
            <Redirect from="/" exact to="/login" />
        </Switch>
    </div>
  );
}

export default App;
