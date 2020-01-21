import React from 'react';
import CustomButton from '../../atoms/buttons/CustomButton/customButton';
import {labelConfig,screenConfig} from '../../../../static/conf/constants'
import './productItem.scss';

function ProductItem(props){
    const {item} = props;
    const [screenSize,setScreenSize]= React.useState(window.matchMedia('(max-width:'+screenConfig.ScreenTablet +')').matches);
    const addCartItem = () => {

    }
    

    const changeTemplate= () => {
        setScreenSize(window.matchMedia('(max-width:'+screenConfig.ScreenTablet +')').matches)
    }

    window.addEventListener('resize',changeTemplate);
    return(
       
        <React.Fragment >
             {(!screenSize) ? (<div className='product_item'>
            <h5 className='product_item_title'>{item.name}</h5>
            <figure className='product_item_info'>
                <img alt={item.name} className='product_item_image' src={item.imageURL}/>
                <figcaption title={item.description} className='product_item_desc'>{item.description}</figcaption>
            </figure>
            <CustomButton label={labelConfig.AddToCart} styleClass='product_item_btn' control={labelConfig.MyCart} text={labelConfig.Buy + item.price} handler={addCartItem}/>
             </div>)
             : (<div className='product_item'>
                <h5 className='product_item_title'>{item.name}</h5>
            <figure className='product_item_info'>
                <img alt={item.name} className='product_item_image' src={item.imageURL}/>
                <div className='product_item_content'>
                <figcaption className='product_item_desc' title={item.description}>{item.description}</figcaption>
                <CustomButton label={labelConfig.AddToCart} styleClass='product_item_btn' control={labelConfig.MyCart} text={labelConfig.Buy + item.price} handler={addCartItem}/>
                </div>
            </figure>
            
             </div>
             )
}
            </React.Fragment>
    )
}

export default ProductItem;