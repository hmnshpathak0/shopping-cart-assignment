
  
import React, { Component } from 'react';
import './App.scss';
import {
  BrowserRouter,
  Switch, Route
} from "react-router-dom";
import Login from './pages/login/login';
import Header from './utility/templates/organisms/header/header';
import Home from './pages/home/home';
import {connect} from 'react-redux';
import ProductDetails from './pages/productDetails/productDetails';
import Register from './pages/register/register';
import MyCart from './pages/myCart/myCart';
import {screenConfig,labelConfig} from './static/conf/constants';


class App extends Component {
  constructor() {
    super();
    this.state = {
        screenSize: window.matchMedia('(' + labelConfig.MinWidth + screenConfig.ScreenLaptop + ')').matches
          ? screenConfig.ScreenLaptop
          : (window.matchMedia('(' + labelConfig.MinWidth + screenConfig.ScreenTablet + ')').matches
            ? screenConfig.ScreenTablet : screenConfig.ScreenMobile),
        cartOpen:false,
     
          };
  } 

  static getDerivedStateFromProps(props,state){
    let update = {};
    if(props.cartOpen != state.cartOpen){
        update.cartOpen = props.cartOpen;
    }

    return Object.keys(update).length?update:null;
  }

  

  render() {
    const isCartOpen = this.state.screenSize==screenConfig.ScreenLaptop && this.state.cartOpen ;
  
    return (
      <BrowserRouter>
       <div  className={'shoppingApp '+ (isCartOpen?'shoppingApp--light':'')}>
      <Header screenSize={this.state.screenSize}/>
          <div id='main-container'  className='main-container'>
            <Switch>
              <Route exact path="/" render={(props) => <Home {...props} screenSize={this.state.screenSize} />}/>
              <Route exact path="/home" render={(props) => <Home {...props} screenSize={this.state.screenSize} />} />
              <Route exact path="/plp"  render={(props) => <ProductDetails {...props} screenSize={this.state.screenSize} />} />
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

const mapStateToProps= state =>  {
  return {
  cartOpen: state.updateData.cartOpen,
  }
}

export default connect(mapStateToProps,null)(App);
