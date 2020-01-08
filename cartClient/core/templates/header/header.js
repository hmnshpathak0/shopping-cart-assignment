import React, { Component } from 'react';
import './header.scss';
import  {NavLink} from 'react-router-dom'
import CartButton from '../../theme/buttons/cartButton/cartButton'
import DropDown from '../../theme/dropDown/dropdown';
import links from './links.json'

class Header extends React.Component{
    constructor(){
        super();
        this.state={
            toggle:false,
            height:0
        }
        this.headerElement = React.createRef();
        links.slice(0,2).map(url => console.log(url.url))
    }
  
    //this method is called to toggle the menu Bar
    toggleMenu=() => {
       
        this.setState({toggle : !this.state.toggle})
    }
    updateDimensions(){
        console.log("height",this.headerElement)
        this.setState({height:this.ref.current.clientHeight})
    }
    //Calling the componentDidMount life cycle
    componentDidMount(){
        
        window.addEventListener('resize', this.updateDimensions);
    }
    render(){
        
        return(
        <div ref={this.headerElement} className='header'>
        <nav role="navigation" className='header_leftpan'>
        <img className='header_logo' title='sabka Bazaar' alt='sabka Bazaar'/>
        <i title='Menu bar' tabIndex='0'  role="navigation" onClick={this.toggleMenu} aria-hidden="true" className='fa fa-bars fa-2x'></i>
        <div className='header_menu'>
            {links.slice(0,2).map((nav,index) =>{
               return  <NavLink aria-label={nav.name} key={index}  className='header_menu_item' to={'/'+nav.url}>{nav.name}</NavLink>
            })
        }
        </div>
        <DropDown height={this.state.height} toggle={this.state.toggle}/>
        </nav>
        <div className='header_rightpan'>
            <CartButton/>
        </div>
        </div>
        )
    }
}
export default Header;