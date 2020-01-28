import React from 'react';
import './MyCart.scss';
import {connect} from 'react-redux';
import CartItem from '../../utility/templates/molecules/cartItem/cartItem';
import { labelConfig, urlConfig } from '../../static/conf/constants';
import CustomButton from '../../utility/templates/atoms/buttons/customButton/customButton';

class MyCart extends React.Component{
    constructor(){
        super();
        this.state={
            cart:[],
            total:0,
        }
    }
    
    static getDerivedStateFromProps(props,state){
        let update = {};
        update.total= 0 ;
        update.cart = props.cart;
        props.cart.map(item => {
            let itemTotal = item.quantity * item.price;
            update.total += itemTotal;
        })
        return Object.keys(update).length? update:null
    }
    render(){
  
        return(
            <main className='cart'>
                {
                this.state.cart.length?(
            <React.Fragment><div className='cart_desc'>
                    <h3>My Cart </h3>
                    <span>{'('+this.state.cart.length+' item)'}</span>
                 </div> 
                 <section className='cart_items'>
                  {
                   this.state.cart.map(cartItem => <CartItem key={cartItem.id} item={cartItem}/>)
                  }               
                   <div className='cart_banner'>
                        <img alt={labelConfig.CartBanner} src={urlConfig.cartbannerImageUrl} className='cart_banner_img'/>
                        <span>{labelConfig.CartBannerTitle}</span>  
                    </div>
                </section>
                <div className='cart_checkout'>
                    <span className='cart_checkout--small'>{labelConfig.CartPromoCode}</span>
                    <CustomButton styleClass='cart_checkout_btn cart_checkout--medium' label={labelConfig.CartCheckout} control={labelConfig.CartPayment} rightText={labelConfig.Rupee+this.state.total+' '+labelConfig.RightArrow} text={labelConfig.CartProceed}/>
                </div>
          </React.Fragment>
            ):(
            <div className='cart_empty'>
                The cart is empty
            </div>)
                }
        </main>
            )
    }
}

const mapStatetoProps = state => {
    return {
        cart: state.updateData.cart,
    }
}
export default connect(mapStatetoProps,null)(MyCart);