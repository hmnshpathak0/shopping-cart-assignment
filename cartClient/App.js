
  
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

  changeScreen = () => {
    this.setState({
      screenSize: window.matchMedia('(' + labelConfig.MinWidth + screenConfig.ScreenLaptop + ')').matches
          ? screenConfig.ScreenLaptop
          : (window.matchMedia('(' + labelConfig.MinWidth + screenConfig.ScreenTablet + ')').matches
            ? screenConfig.ScreenTablet : screenConfig.ScreenMobile)
    })
  }

  ComponentDidMount(){
    window.addEventListener('resize',this.changeScreen)
  }
  
  componentWillUnmount(){
    window.removeEventListener('resize',this.changeScreen)
  }

  render() {
    const isCartOpen = this.state.screenSize==screenConfig.ScreenLaptop && this.state.cartOpen ;
    return (
      <BrowserRouter>
       <div  className={'shoppingApp '+ (isCartOpen?'shoppingApp--light':'')}>
      <Header handleResize={this.changeScreen} screenSize={this.state.screenSize}/>
          <div   className='shoppingApp_container'>
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route exact path="/home" component={Home} />} />
              <Route exact path="/plp"  component={ProductDetails}/>} />
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/cart" component={MyCart} />
              <Route component={Home} />
            </Switch>
          </div>
          { isCartOpen && (
          <div className='shoppingApp_modal'>
              <MyCart isModalOpen={isCartOpen} />
          </div>
          )
          }
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
