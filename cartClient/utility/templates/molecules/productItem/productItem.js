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
        this.props.handler(this.props.item);
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
            <figure className='product__item'>
            <figcaption><h5 className='product__item__title'>{item.name}</h5></figcaption>
             {(!this.state.screenSize) ? (
                 <React.Fragment>
                 <div className='product__item__info'>
                    <img alt={item.name} className='product__item__image' src={item.imageURL}/>
                    <span  className='product__item__desc'>{item.description}</span>
                </div>
                <div className='product__item__action'>
            <CustomButton  styleClass='product__item__btn' control={labelConfig.MyCart} text={labelConfig.Buy + item.price} handler={this.addCartItem}/>
                </div>
                </React.Fragment>
            )
             : (
                 <React.Fragment>
            <div className='product__item__info'>
                <img alt={item.name} className='product__item__image' src={item.imageURL}/>
                <div className='product__item__content'>
                <span className='product__item__desc' title={item.description}>{item.description}</span>
                <CustomButton  styleClass='product__item__btn' control={labelConfig.MyCart} text={labelConfig.Buy + item.price} handler={this.addCartItem}/>                </div>
            </div>
            </React.Fragment>
             
             )
            
}
</figure>
            </React.Fragment>
    )
}
}

export default ProductItem;