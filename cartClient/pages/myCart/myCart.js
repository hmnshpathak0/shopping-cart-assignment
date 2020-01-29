import React from 'react';
import {withRouter} from 'react-router-dom';
import './MyCart.scss';
import {connect} from 'react-redux';
import CartItem from '../../utility/templates/molecules/cartItem/cartItem';
import { labelConfig, urlConfig } from '../../static/conf/constants';
import CustomButton from '../../utility/templates/atoms/buttons/customButton/customButton';
import {CART_OPEN_STATUS} from '../../utility/Actions/cartAction/types'

class MyCart extends React.Component{
    constructor(){
        super();
        this.state={
            cart:[],
            total:0,
            isModalOpen:false
        }
    }
    
    redirectHome= () => {
        this.closeCart();
        this.props.history.push('/'+urlConfig.homecompUrl);
    }

    closeCart = () => {
        this.props.closeModal();
    }

    static getDerivedStateFromProps(props,state){
        let update = {};
        update.total= 0 ;
        update.cart = props.cart;
        if(props.isModalOpen!=state.isModalOpen){
            update.isModalOpen = props.isModalOpen;
        }
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
                    <React.Fragment>
                        <div className='cart_details'>
                        <div className='cart_desc'>
                    <h3 className='cart_font cart_font--xlarge'>My Cart </h3>
                    <span className='cart_font cart_font--medium'>{'('+this.state.cart.length+' item)'}</span>
                    {
                        this.state.isModalOpen && (
                        <button className='cart_close' aria-label={labelConfig.CloseCartButton} aria-controls={labelConfig.CloseCart} onClick={this.closeCart}><i aria-hidden='true' className='fa fa-times'/></button>
                        )
                    }

                 </div> 
                 <section className='cart_items'>
                  {
                   this.state.cart.map(cartItem => <CartItem key={cartItem.id} item={cartItem}/>)
                  }               
                </section>
                <div className='cart_banner'>
                        <img alt={labelConfig.CartBanner} src={urlConfig.cartbannerImageUrl} className='cart_banner_img'/>
                        <span>{labelConfig.CartBannerTitle}</span>  
                    </div>
                </div>
                <div className='cart_checkout'>
                    <span className='cart_font cart_font--small'>{labelConfig.CartPromoCode}</span>
                    <CustomButton handler={this.redirectHome} styleClass='cart_btn cart_btn--full cart_font cart_font--medium' label={labelConfig.CartCheckout} control={labelConfig.CartPayment} rightText={labelConfig.Rupee+this.state.total+' '+labelConfig.RightArrow} text={labelConfig.CartProceed}/>
                </div>
          </React.Fragment>
            ):(
            <React.Fragment>
                <div className='cart_desc'>
                    <h3 className='cart_font cart_font--xlarge'>{labelConfig.MyCart} </h3>
                    {
                        this.state.isModalOpen && (
                        <button className='cart_close' aria-label={labelConfig.CloseCartButton} aria-controls={labelConfig.CloseCart} onClick={this.closeCart}><i aria-hidden='true' className='fa fa-times'/></button>
                        )
                    }
                </div>
                <div className='cart_emptyDesc'>
                <h5 className='cart_font cart_font--medium'>{labelConfig.CartEmptyMessage}</h5>
                <span className='cart_font cart_font--medium' >{labelConfig.CartEmptyPromo}</span>
                </div>
                <CustomButton handler={this.redirectHome} styleClass='cart_btn cart_btn--empty cart_font cart_font--medium' label={labelConfig.CartEmptyButtonText} control={labelConfig.CartEmptyButtonText}  text={labelConfig.CartEmptyButtonText}/>
            </React.Fragment>)
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
const mapDispatcherToProps = dispatch => {
    return {
        closeModal: () => dispatch({
            type: CART_OPEN_STATUS,
            payload: false,
        })
    }
}
export default withRouter(connect(mapStatetoProps,mapDispatcherToProps)(MyCart));