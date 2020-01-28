import React from 'react';
import './MyCart.scss';
import {connect} from 'react-redux';
import CartItem from '../../utility/templates/molecules/cartItem/cartItem';
import { labelConfig, urlConfig } from '../../static/conf/constants';

class MyCart extends React.Component{
    constructor(){
        super();
        this.state={
            cart:[]
        }
    }
    
    static getDerivedStateFromProps(props,state){
        let update = {};
        console.log(props.cart,state.cart)
        update.cart = props.cart;
        return Object.keys(update).length? update:null
    }
    render(){
        return(
            <main className='cart'>
                {
                this.state.cart.length?(
            <React.Fragment><div className='cart_desc'>
                    <h3>My Cart </h3>
                    <span>(1 item)</span>
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