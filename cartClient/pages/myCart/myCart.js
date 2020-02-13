import React from 'react';
import {withRouter} from 'react-router-dom';
import './MyCart.scss';
import 'font-awesome/scss/font-awesome.scss'; 
import {connect} from 'react-redux';
import CartItem from '../../utility/templates/molecules/cartItem/cartItem';
import { labelConfig, urlConfig } from '../../static/conf/constants';
import CustomButton from '../../utility/templates/atoms/buttons/customButton/customButton';
import {CART_OPEN_STATUS,SAVE_CATEGORY} from '../../utility/Actions/cartAction/types'

class MyCart extends React.Component{
    constructor(){
        super();
        this.state={
            cart:[],
            total:0,
            isModalOpen:false,
        }
        this.closeRef = React.createRef();
    }
    
    redirectHome= () => {
        this.closeCart();
        this.props.history.push('/'+urlConfig.homecompUrl);
    }

    closeCart = () => {
        this.props.closeModal(false);
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
    changeFocus = (e) => {
        if(this.state.isModalOpen && e.keyCode == 9 && e.target.classList.value.indexOf('cart__btn') > -1){
            e.preventDefault();
            if(this.closeRef.current)
                this.closeRef.current.focus();
        }
    }
    componentDidMount(){
   
            this.props.closeModal(true);
            window.addEventListener('keydown', (e) => this.changeFocus(e) );
            if(this.closeRef.current)
                this.closeRef.current.focus();
    }

    componentDidUpdate(){
   
        this.props.closeModal(true);
}
    componentWillUnmount(){
        this.props.closeModal(false);

    }
    render(){
  
        return(
            <main className='cart' >
                {
                this.state.cart.length?(
                    <React.Fragment>
                        <div>
                        <div className='cart__desc'>
                    <h3>{labelConfig.MyCart} </h3>
                    <span>{'('+this.state.cart.length+' item)'}</span>
                    {
                        this.state.isModalOpen && (
                        <button ref={this.closeRef} className='cart__close' aria-label={labelConfig.CloseCartButton} aria-controls={labelConfig.CloseCart} onClick={this.closeCart}><i aria-hidden='true' className='fa fa-times'/></button>
                        )
                    }

                 </div> 
                 <section className='cart__items'>
                  {
                   this.state.cart.map(cartItem => <CartItem key={cartItem.id} item={cartItem}/>)
                  }               
                </section>
                <div className='cart__banner'>
                        <img alt={labelConfig.CartBanner} src={urlConfig.cartbannerImageUrl} className='cart__banner__img'/>
                        <span>{labelConfig.CartBannerTitle}</span>  
                    </div>
                </div>
                <div className='cart__checkout'>
                    <span >{labelConfig.CartPromoCode}</span>
                    <CustomButton handler={this.redirectHome} styleClass='cart__btn cart__btn--full' label={labelConfig.CartCheckout} control={labelConfig.CartPayment} rightText={labelConfig.Rupee+this.state.total+' '+labelConfig.RightArrow} text={labelConfig.CartProceed}/>
                </div>
          </React.Fragment>
            ):(
            <React.Fragment>
                <div className='cart__desc'>
                    <h3>{labelConfig.MyCart} </h3>
                    {
                        this.state.isModalOpen && (
                        <button ref={this.closeRef} className='cart__close' aria-label={labelConfig.CloseCartButton} aria-controls={labelConfig.CloseCart} onClick={this.closeCart}><i aria-hidden='true' className='fa fa-times'/></button>
                        )
                    }
                </div>
                <div>
                <h5>{labelConfig.CartEmptyMessage}</h5>
                <span>{labelConfig.CartEmptyPromo}</span>
                </div>
                <CustomButton onfocusout={this.changeFocus} handler={this.redirectHome} styleClass='cart__btn cart__btn--empty' label={labelConfig.CartEmptyButtonText} control={labelConfig.CartEmptyButtonText}  text={labelConfig.CartEmptyButtonText}/>
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
        closeModal: flag => dispatch({
            type: CART_OPEN_STATUS,
            payload: flag,
        })
    }
}
export default withRouter(connect(mapStatetoProps,mapDispatcherToProps)(MyCart));