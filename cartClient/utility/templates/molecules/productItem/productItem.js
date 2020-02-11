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
            <div className='product__item'>
            <h5 className='product__item__title'>{item.name}</h5>
             {(!this.state.screenSize) ? (
                 <React.Fragment>
                 <figure className='product__item__info'>
                    <img alt={item.name} className='product__item__image' src={item.imageURL}/>
                    <figcaption  className='product__item__desc'>{item.description}</figcaption>
                </figure>
                <div className='product__item__action'>
            <CustomButton  styleClass='product__item__btn' control={labelConfig.MyCart} text={labelConfig.Buy + item.price} handler={this.addCartItem}/>
                </div>
                </React.Fragment>
            )
             : (
                 <React.Fragment>
            <figure className='product__item__info'>
                <img alt={item.name} className='product__item__image' src={item.imageURL}/>
                <div className='product__item__content'>
                <figcaption className='product__item__desc' title={item.description}>{item.description}</figcaption>
                <CustomButton  styleClass='product__item__btn' control={labelConfig.MyCart} text={labelConfig.Buy + item.price} handler={this.addCartItem}/>                </div>
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