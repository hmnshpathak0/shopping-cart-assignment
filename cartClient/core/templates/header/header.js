import React, { Component } from 'react';
import './header.scss';
import CartButton from '../../theme/buttons/cartButton/cartButton'
import DropDown from '../../theme/dropDown/dropdown';

class Header extends React.Component{
    constructor(){
        super();
        this.state={
            toggle:false
        }
    }
    //this method is called to toggle the menu Bar
    toggleMenu=() => {
       
        this.setState({toggle : !this.state.toggle})
    }
    render(){
        
        return(
        <div className='header'>
        <div  className='header_leftpan'>
        <img className='header_logo' alt='sabka Bazaar'/>
        <i  onClick={this.toggleMenu} aria-hidden="true" className='fa fa-bars fa-2x'></i>
        <div className='header_menu'>
        <li><a>Home</a></li>
        <li><a>Products</a></li>
        </div>
        <DropDown toggle={this.state.toggle}/>
        </div>
        <div className='header_rightpan'>
            <CartButton/>
        </div>
        </div>
        )
    }
}
export default Header;