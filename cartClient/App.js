
  
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.scss';
import {
  BrowserRouter,
  Switch, Route
} from "react-router-dom";
import Login from './pages/login/login';
import {links} from './utility/templates/organisms/header/links.json'
import Header from './utility/templates/organisms/header/header';
import Home from './pages/home/home';
import {Provider} from 'react-redux';
import {store} from './store';
import ProductDetails from './pages/productDetails/productDetails';
import Register from './pages/register/register';
import MyCart from './pages/myCart/myCart';


class App extends Component {
  constructor() {
    super();
    this.state = {
      
    };
  } 

  render() {
    return (
       
      <BrowserRouter>
       <div className='app'>
      <Header/>
          <div id='main_container' className='main_container'>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/home" component={Home} />
              <Route exact path="/plp" component={ProductDetails} />
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/cart" component={MyCart} />
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