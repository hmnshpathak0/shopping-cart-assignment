
  
import React, { Component } from 'react';
import './App.scss';
import {
  BrowserRouter,
  Switch, Route
} from "react-router-dom";
import Home from './pages/home/home';
import Login from './pages/login/login';
import Register from './pages/register/register';
import Cart from './pages/myCart/mycart';
import { connect } from 'react-redux';

class App extends Component {
  constructor() {
    super();
    this.state = {};
  } 

  render() {
    return (
      <BrowserRouter>
          <div id='app-container' className='app-container'>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/home" component={Home} />
              <Route exact path="/productDetails" component={ProductDetails} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/register" component={Register} />
              <Route exact path="/mycart" component={MyCart} />
              <Route component={Home} />
            </Switch>
          </div>
          <Footer />
    
      </BrowserRouter>
    );
  }
}

export default App;