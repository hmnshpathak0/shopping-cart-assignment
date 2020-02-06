
  
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
import Footer from './utility/templates/organisms/footer/footer';


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
    console.log(this.state)
    this.setState({
      screenSize: window.matchMedia('(' + labelConfig.MinWidth + screenConfig.ScreenLaptop + ')').matches
          ? screenConfig.ScreenLaptop
          : (window.matchMedia('(' + labelConfig.MinWidth + screenConfig.ScreenTablet + ')').matches
            ? screenConfig.ScreenTablet : screenConfig.ScreenMobile)
    })
  }



  render() {
    const isCartOpen = this.state.screenSize==screenConfig.ScreenLaptop && this.state.cartOpen ;
    console.log(this.state.screenSize,this.state.cartOpen)
    return (
      <BrowserRouter>
       <div  className={'app '+ (isCartOpen?'app--light':'')}>
      <Header handleResize={this.changeScreen} screenSize={this.state.screenSize}/>
         {/* / <div   className={'content'+(this.state.cartOpen?' content--grow':'')}> */}
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route exact path="/home" component={Home} />} />
              <Route exact path="/plp"  component={ProductDetails}/>} />
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/cart" component={MyCart} />
              <Route component={Home} />
            </Switch>
          {/* </div> */}
          { isCartOpen && (
          <div className='cart-modal'>
              <MyCart isModalOpen={isCartOpen} />
          </div>
          )
          }
         {
          !this.state.cartOpen &&  <Footer/> 
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
