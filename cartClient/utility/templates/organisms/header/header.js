import React, { Component } from 'react';
import './header.scss';
import  {NavLink} from 'react-router-dom'
import CartButton from '../../atoms/buttons/cartButton/cartButton'
import DropDown from '../../atoms/dropDown/dropdown';
import links from './links.json';
import {connect} from 'react-redux';

class Header extends React.Component{
    constructor(){
        super();
        this.state={
            toggle:false,
            height:0,
            loginStatus:'',
            cartLength:0,
        }
        this.headerElement = React.createRef();
       
    }

    static getDerivedStateFromProps(props,state){
        let updateData={};
        if(props.loginStatus != state.loginStatus){
            updateData.loginStatus= props.loginStatus
        }

        if(props.cart.length && (props.cart.length!=state.cartLength)){
            updateData.cartLength = props.cart.length;
        }
        return Object.keys(updateData).length?updateData:null;
    }
  
    //this method is called to toggle the menu Bar
    toggleMenu=() => {
       //setting the toggle value for dropdown menu
        this.setState({toggle : !this.state.toggle})
        //setting the dropdown top position when menu is opened
        if(!this.state.toggle && this.state.height!=this.headerElement.current.clientHeight)
            this.setState({height:this.headerElement.current.clientHeight})
    }
    updateDimensions = () => {
        if(this.state.toggle && this.state.height!=this.headerElement.current.clientHeight)
            this.setState({height:this.headerElement.current.clientHeight})
    }
    //Calling the componentDidMount life cycle
    componentDidMount(){
        //adding event for resize responsiveness
        window.addEventListener('resize', this.updateDimensions);

    }
    componentWillUnmount(){
        window.removeEventListener("resize",this.updateDimensions);
    }
    render(){
        
        return(
        <div ref={this.headerElement} className='header'>
        <nav role="navigation" className='header_leftpan'>
        <img className='header_logo' title='sabka Bazaar' alt='sabka Bazaar'/>
        <button className='header_iconBtn' aria-label='Menu Bar' aria-controls='navigation links'> 
            <i title='Menu bar' tabIndex='0'  role="navigation" onClick={this.toggleMenu} aria-hidden="true" className='fa fa-bars header_icon fa-2x'></i>
        </button>
        <div className='header_nav'>
            {links.slice(0,2).map((nav,index) =>{
               return  <NavLink aria-label={nav.name} key={index}  className='header_nav_item' to={'/'+nav.url}>{nav.name}</NavLink>
            })
        }
        </div>
        <DropDown loginStatus={this.state.loginStatus} height={this.state.height} toggle={this.state.toggle}/>
        </nav>
        <div className='header_rightpan'>
        <div className={'header_rightpan_nav' +((this.state.loginStatus)?' header_rightpan_nav--hide':' header_rightpan_nav--show')} role='navigation'>
        {links.slice(2,4).map((nav,index) =>{
               return  <NavLink aria-label={nav.name} key={index}  className='rightpan_nav_item' to={'/'+nav.url}>{nav.name}</NavLink>
            })
        }
        </div>
            <CartButton total={this.state.cartLength} style={'header_cartButton '+ ((this.state.loginStatus)?'header_cartButton--full':'header_cartButton--stretch')}/>
        </div>
        </div>
        )
    }
}
const mapStatetoProps = state => {
    return {
        loginStatus: state.updateLoginData.loginStatus,
        cart:state.updateData.cart,
    }
}
export default connect(mapStatetoProps,null)(Header);