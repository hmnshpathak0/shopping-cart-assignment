import React, { Component } from 'react';
import './header.scss';
import  {NavLink} from 'react-router-dom'
import CartButton from '../../atoms/buttons/cartButton/cartButton'
import DropDown from '../../atoms/dropDown/dropdown';
import links from './links.json';
import {screenConfig, urlConfig, labelConfig} from '../../../../static/conf/constants';
import {connect} from 'react-redux';
import nativeClick from '../../molecules/nativeClick/nativeClick';
import CustomButton from '../../atoms/buttons/customButton/customButton';

class Header extends React.Component{
    constructor(){
        super();
        this.state={
            toggle:false,
            height:0,
            loginStatus:'',
            cartLength:0,
            screenSize:'',
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
        if(props.screenSize != state.screenSize){
            updateData.screenSize = props.screenSize;
        }
        if((props.toggle!=state.toggle)){
            updateData.toggle = props.toggle
        }
        return Object.keys(updateData).length?updateData:null;
    }
  
    //this method is called to toggle the menu Bar
    toggleMenu=() => {
  
        //setting the dropdown top position when menu is opened
        if(!this.state.toggle && this.state.height!=this.headerElement.current.clientHeight)
            this.setState({height:this.headerElement.current.clientHeight})
    }
    updateDimensions = () => {
        this.props.handleResize();
        if(this.state.toggle && this.state.height!=this.headerElement.current.clientHeight){
            this.setState({height:this.headerElement.current.clientHeight})
        }
    }
    //Calling the componentDidMount life cycle
    componentDidMount(){
        this.setState({height:this.headerElement.current.clientHeight})
        //adding event for resize responsiveness
        window.addEventListener('resize', this.updateDimensions);

    }
    componentWillUnmount(){
        window.removeEventListener("resize",this.updateDimensions);
    }
    render(){
        
        return(
        <div ref={this.headerElement} className='header'>
        <nav role="navigation" className='header__leftpan'>
            <img className='header__logo' src={urlConfig.logoImageUrlSmall} title='sabka Bazaar'  srcSet={urlConfig.logoImageUrlLarge+' 2x'}
     sizes="(max-width: 600px) 480px,
            800px"   src={urlConfig.logoImageUrlSmall} alt='sabka Bazaar'/>
        <CustomButton styleClass='header__iconBtn' handler={this.toggleMenu} label='Menu Bar' control='header__dropdown' > 
            <i title='Menu bar'  role="navigation"  aria-hidden="true" className='fa fa-bars header__icon fa-2x'></i>
        </CustomButton>
        <div className='header__nav'>
            {links.slice(0,2).map((nav,index) =>{
               return  <NavLink  activeClassName='header__nav__item--active' aria-label={nav.name} key={index}  className='header__nav__item' to={'/'+nav.url}>{nav.name}</NavLink>
            })
        }
        </div>
        <DropDown loginStatus={this.state.loginStatus} height={this.state.height} toggle={this.state.toggle}/>
        </nav>
        <div className='header__rightpan'>
        <div className={'header__rightpan__nav' +((this.state.loginStatus)?' header__rightpan__nav--hide':' header__rightpan__nav--show')} role='navigation'>
        {links.slice(2,4).map((nav,index) =>{
               return  <NavLink aria-label={nav.name} key={index}   to={'/'+nav.url}>{nav.name}</NavLink>
            })
        }
        </div>
            <CartButton screenSize={this.state.screenSize}  total={this.state.cartLength} style='header__cartButton '/>
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
export default connect(mapStatetoProps,null)(nativeClick(Header,['header__icon']));