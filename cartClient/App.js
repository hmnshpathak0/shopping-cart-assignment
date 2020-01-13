
  
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
import {Provider} from 'react-redux';
import {store} from './store'


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
          <div id='app_container' className='app_container'>
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

ReactDOM.render( <Provider store={store}>
  <App />
</Provider>, document.getElementById('app'));