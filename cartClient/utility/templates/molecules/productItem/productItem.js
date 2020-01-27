import React from 'react';
import CustomButton from '../../atoms/buttons/customButton/customButton';
import {labelConfig,screenConfig} from '../../../../static/conf/constants'
import './productItem.scss';

class ProductItem extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            screenSize: window.matchMedia('(max-width:'+screenConfig.ScreenTablet +')').matches,
        }
    }
    addCartItem = () => {

    }
    

    changeTemplate= () => {
        this.setState({screenSize:window.matchMedia('(max-width:'+screenConfig.ScreenTablet +')').matches})
    }
    componentWillMount(){
    window.addEventListener('resize',this.changeTemplate);
    }
    componentWillUnmount(){
        window.removeEventListener('resize',this.changeTemplate);
    }
    render(){
        const {item} = this.props;
    return(
       
        <React.Fragment >
            <div className='product_item'>
            <h5 className='product_item_title'>{item.name}</h5>
             {(!this.state.screenSize) ? (
                 <React.Fragment>
                 <figure className='product_item_info'>
                    <img alt={item.name} className='product_item_image' src={item.imageURL}/>
                    <figcaption title={item.description} className='product_item_desc'>{item.description}</figcaption>
                </figure>
            <CustomButton label={labelConfig.AddToCart} styleClass='product_item_btn' control={labelConfig.MyCart} text={labelConfig.Buy + item.price} handler={this.addCartItem}/>
                </React.Fragment>
            )
             : (
                 <React.Fragment>
            <figure className='product_item_info'>
                <img alt={item.name} className='product_item_image' src={item.imageURL}/>
                <div className='product_item_content'>
                <figcaption className='product_item_desc' title={item.description}>{item.description}</figcaption>
                <CustomButton label={labelConfig.AddToCart} styleClass='product_item_btn' control={labelConfig.MyCart} text={labelConfig.Buy + item.price} handler={this.addCartItem}/>
                </div>
            </figure>
            </React.Fragment>
             
             )
            
}
</div>
            </React.Fragment>
    )
}
}

export default ProductItem;