import React from 'react';
import './CartButton.scss';

function CartButton(props) {
  return (
    <button className='header_cartButton'
      aria-labelledby='cartIcon' aria-describedby='cartItems'>
      <img src='/static/images/cart.svg' alt="Go To Cart"   />
      <span> {1} Item</span>
    </button>
  );
}

export default CartButton;
