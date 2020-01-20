import React from 'react';
import CustomButton from '../../atoms/buttons/CustomButton/customButton';
import {labelConfig} from '../../../../static/conf/constants'
import './productItem.scss';

function ProductItem(props){
    const {item} = props;
    const addCartItem = () => {

    }
    return(
        <div className='product_item'>
            <h5>{item.name}</h5>
            <figure className='product_desc'>
                <img className='product_image' src={item.imageURL}/>
                <figcaption className='product_description'>{item.description}</figcaption>
            </figure>
            <CustomButton label={labelConfig.AddToCart} styleClass='product_btn' control={labelConfig.MyCart} text={labelConfig.Buy + item.price} handler={addCartItem}/>
        </div>
    )
}

export default ProductItem;