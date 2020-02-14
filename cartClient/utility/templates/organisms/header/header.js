import React from 'react';
import './header.scss';
import  {withRouter, NavLink} from 'react-router-dom'
import CartButton from '../../atoms/buttons/cartButton/cartButton'
import DropDown from '../../atoms/dropDown/dropdown';
import links from './links.json';
import {screenConfig,urlConfig, labelConfig} from '../../../../static/conf/constants';
import {connect} from 'react-redux';
import nativeClick from '../../molecules/nativeClick/nativeClick';
import CustomButton from '../../atoms/buttons/customButton/customButton';
import {CART_OPEN_STATUS} from '../../../Actions/cartAction/types'


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
        updateData.cartLength = props.cart.length;
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
    componentDidUpdate(){
        if(this.props.screenSize==screenConfig.ScreenLaptop && this.props.history.location.pathname.indexOf(urlConfig.cartcompUrl) > -1){
            this.props.closeModal(false)
            this.props.history.push('/'+urlConfig.homecompUrl);
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
        <header ref={this.headerElement} className='header'>
        <nav  className='header__leftpan'>
            <img className='header__logo' src={urlConfig.logoImageUrlSmall} title='sabka Bazaar'  srcSet={urlConfig.logoImageUrlLarge+' 2x'}
     sizes="(max-width: 600px) 480px,
            800px"   src={urlConfig.logoImageUrlSmall} alt={labelConfig.SabkaBazaar}/>
        <CustomButton styleClass='header__iconBtn' handler={this.toggleMenu} label={labelConfig.MenuBar} control='header__dropdown' > 
            <i title={labelConfig.MenuBar}  role="navigation"  aria-hidden="true" className='fa fa-bars header__icon fa-2x'></i>
        </CustomButton>
        <div className='header__nav'>
            {links.slice(0,2).map((nav,index) =>{
               return  <NavLink  activeClassName='header__nav__item--active'  key={index}  className='header__nav__item' to={'/'+nav.url}>{nav.name}</NavLink>
            })
        }
        </div>
        <DropDown loginStatus={this.state.loginStatus} height={this.state.height} toggle={this.state.toggle}/>
        </nav>
        <div className='header__rightpan'>
       { !this.state.loginStatus && (<div className='header__rightpan__nav' role='navigation'>
        {links.slice(2,4).map((nav,index) =>{
               return  <NavLink  key={index}   to={'/'+nav.url}>{nav.name}</NavLink>
            })
        }
        </div>)
    }
            <CartButton screenSize={this.state.screenSize}  total={this.state.cartLength} style='header__cartButton '/>
        </div>
        </header>
        )
    }
}
const mapStatetoProps = state => {
    return {
        loginStatus: state.updateLoginData.loginStatus,
        cart:state.updateData.cart,
    }
}
const mapDispatcherToProps = dispatch => {
    return {
      closeModal: flag =>
        dispatch({
          type: CART_OPEN_STATUS,
          payload: flag
        })
    };
  };
export default withRouter(connect(mapStatetoProps,mapDispatcherToProps)(nativeClick(Header,['header__icon'])));