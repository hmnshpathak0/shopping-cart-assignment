import React from 'react';
import {NavLink} from 'react-router-dom';
import './CartButton.scss';
import {urlConfig} from '../../../../../static/conf/constants'

function CartButton(props) {
  return (
    <button aria-label='cartIcon' aria-describedby='cartItems' className={props.style} >
    <NavLink to={'/'+urlConfig.cartcompUrl} className='header_cartNav'>
      <img src='/static/images/cart.svg' alt="Go To Cart"   />
      <span> {props.total} Item</span>
    </NavLink>
    </button>
  );
}

export default CartButton;
