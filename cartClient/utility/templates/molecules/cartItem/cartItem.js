import React from 'react';
import {labelConfig} from '../../../../static/conf/constants';
import CustomButton from '../../atoms/buttons/customButton/customButton';
import './cartItem.scss';
function CartItem(props){
    const {item} = props;
    //decrease the quantity of the item
    const reduceItem = () => {

    }
    //increase the quantity of the item
    const increaseItem = () => {

    }
    return (
        <figure className='cart_item'>
             <img alt={item.name} className='cart_item_image' src={item.imageURL}/>
             <div className='cart_item_info'>
             <figcaption title={item.name} className='cart_item_title'><h4>{item.name}</h4></figcaption>
             <div className='cart_item_quantity'>
                <CustomButton text={labelConfig.Minus} styleClass='cart_item_btn'  label={labelConfig.ReduceQuantity} control={labelConfig.CartItem} handler={reduceItem}/>
                <span>{item.quantity}</span>
                <CustomButton text={labelConfig.Plus} styleClass='cart_item_btn' label={labelConfig.IncreaseQuantity} control={labelConfig.CartItem} handler={increaseItem}/>
                <span>{labelConfig.Multiply}</span>
                <span>{item.price}</span>
                <span>{item.totalPrice}</span>
             </div> 
            </div>
        </figure> 
        
    )

}

export default CartItem;