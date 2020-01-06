
  
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.scss';
import {
  BrowserRouter,
  Switch, Route
} from "react-router-dom";
import Login from './pages/login/login';
import { connect } from 'react-redux';
import Header from './core/templates/header/header';
import Home from './pages/home/home';


class App extends Component {
  constructor() {
    super();
    this.state = {};
  } 

  render() {
    return (
       
      <BrowserRouter>
       <div className='app'>
      <Header/>
          <div id='app-container' className='app-container'>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route component={Home} />
            </Switch>
          </div>
      </div>    
      </BrowserRouter>
      
      
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));