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
       //setting the toggle value for dropdown menu
       // this.setState({toggle : !this.state.toggle})
        //setting the dropdown top position when menu is opened
        if(!this.state.toggle && this.state.height!=this.headerElement.current.clientHeight)
            this.setState({height:this.headerElement.current.clientHeight})
    }
    updateDimensions = () => {
        console.log("hiii")
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
        <nav role="navigation" className='header_leftpan'>
            <img className='header_logo' src={urlConfig.logoImageUrlSmall} title='sabka Bazaar'  srcSet={urlConfig.logoImageUrlLarge+' 2x'}
     sizes="(max-width: 600px) 480px,
            800px"   src={urlConfig.logoImageUrlSmall} alt='sabka Bazaar'/>
        <CustomButton styleClass='header_iconBtn' handler={this.toggleMenu} label='Menu Bar' control='header_dropdown' > 
            <i title='Menu bar'  role="navigation"  aria-hidden="true" className='fa fa-bars header_icon fa-2x'></i>
        </CustomButton>
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
            <CartButton screenSize={this.state.screenSize}  total={this.state.cartLength} style={'header_cartButton '+ ((this.state.loginStatus)?'header_cartButton--full':'header_cartButton--stretch')}/>
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
export default connect(mapStatetoProps,null)(nativeClick(Header,['header_icon']));