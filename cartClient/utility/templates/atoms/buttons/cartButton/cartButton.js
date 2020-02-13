import React from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import './CartButton.scss';
import {screenConfig,urlConfig, labelConfig} from '../../../../../static/conf/constants';
import {CART_OPEN_STATUS} from '../../../../Actions/cartAction/types'

function CartButton(props) {
  const handleCartClick = () => {
      if(props.screenSize!=screenConfig.ScreenLaptop){

          props.history.push('/'+urlConfig.cartcompUrl);
      }else{
        props.updateCartOpen();
      }

  }
  return (
    <button onClick={handleCartClick} aria-label='Go to Cart'  className={props.style} >
    <a  className='header__cartNav'>
      <img src={urlConfig.cartButtonUrl}  alt={labelConfig.GoCart}   />
      <span> {props.total} Item</span>
    </a>
    </button>
  );
}
const mapDispatcherToProps = dispatch => {
  return {
    updateCartOpen: () => dispatch({
          type: CART_OPEN_STATUS,
          payload: true,
      })
  }
}

export default withRouter(connect(null,mapDispatcherToProps)(CartButton));
