import React from 'react';
import {connect} from 'react-redux';
import {MODIFY_CART,DELETE_CART} from '../../../Actions/cartAction/types';
import {labelConfig} from '../../../../static/conf/constants';
import CustomButton from '../../atoms/buttons/customButton/customButton';
import './cartItem.scss';
function CartItem(props){
    const {item} = props;
    //decrease the quantity of the item
    const reduceItem = () => {
        if(item.quantity==1){
            props.deleteCartItem(item.id);
            return;
        }
        item.quantity= item.quantity - 1;
        props.modifyCart(item)
    }
    //increase the quantity of the item
    const increaseItem = () => {
        item.quantity= item.quantity + 1;
        props.modifyCart(item)
    }
    return (
        <figure className='cart__item'>
             <img alt={item.name} className='cart__item__image' src={item.imageURL}/>
             <div className='cart__item__info'>
             <figcaption title={item.name} className='cart__item__title'>{item.name}</figcaption>
             <div className='cart__item__quantity'>
                <CustomButton text={labelConfig.Minus} styleClass='cart__item__btn'  label={labelConfig.ReduceQuantity} control={labelConfig.CartItem} handler={reduceItem}/>
                <span>{item.quantity}</span>
                <CustomButton text={labelConfig.Plus} styleClass='cart__item__btn' label={labelConfig.IncreaseQuantity} control={labelConfig.CartItem} handler={increaseItem}/>
                <span>{labelConfig.Multiply}</span>
                <span>{labelConfig.Rupee+item.price}</span>
                <span>{labelConfig.Rupee+item.quantity * item.price}</span>
             </div> 
            </div>
        </figure> 
        
    )

}
const mapDispatcherToProps = dispatch => {
    return {
        modifyCart: item => dispatch({
            type: MODIFY_CART,
            payload:item,
        }),
        deleteCartItem: id => dispatch({
            type: DELETE_CART,
            payload:id,
        })
    }
}

export default connect(null,mapDispatcherToProps)(CartItem);