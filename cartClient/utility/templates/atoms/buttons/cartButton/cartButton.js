import React from 'react';
import {NavLink,withRouter} from 'react-router-dom';
import {connect} from 'react-redux'
import './CartButton.scss';
import {screenConfig,urlConfig} from '../../../../../static/conf/constants';
import {CART_OPEN_STATUS} from '../../../../Actions/cartAction/types'

function CartButton(props) {
  const handleCartClick = () => {
      console.log(props.screenSize)
      if(props.screenSize!=screenConfig.ScreenLaptop){
          props.history.push('/'+urlConfig.cartcompUrl);
      }else{
          props.updateCartOpen();
      }

  }
  return (
    <button onClick={handleCartClick} aria-label='cartIcon' aria-describedby='cartItems' className={props.style} >
    <a  className='header_cartNav'>
      <img src='/static/images/cart.svg' alt="Go To Cart"   />
      <span> {props.total} Item</span>
    </a>
    </button>
  );
}

const mapDispatcherToProps = dispatch => {
  return {
    updateCartOpen: () => dispatch({
      type: CART_OPEN_STATUS,
      payload: true
    })
  }
}
export default withRouter(connect(null,mapDispatcherToProps)(CartButton));
