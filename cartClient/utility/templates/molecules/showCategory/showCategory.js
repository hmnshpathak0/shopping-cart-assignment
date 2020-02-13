import React from 'react';
import {withRouter,NavLink} from 'react-router-dom';
import { connect } from 'react-redux';
import CustomButton from '../../atoms/buttons/customButton/customButton';
import {labelConfig} from '../../../../static/conf/constants';
import {SAVE_CATEGORY} from '../../../Actions/cartAction/types';
import {urlConfig} from '../../../../static/conf/constants';
import './showCategory.scss';

function ShowCategory(props){
    const {item} = props;
    const chooseCategory = () => {
        props.saveData(item);
    }
    return (
        <figure className='cat__item border_bottom_grey'  >
            { ((props.index)%2==0)&&<img src={item.imageUrl?item.imageUrl:''} alt={item.description} className='cat__item__image' />}
             <div className='cat__item__description'>
             <figcaption>{item.name}</figcaption>
             <span>{item.description}</span>
            <NavLink  onClick={chooseCategory} to={'/'+urlConfig.productcompUrl} className='cat__item__btn' >
                {labelConfig.Explore+item.key}
            </NavLink>
        </div>
        { ((props.index)%2==1)&&<img src={item.imageUrl} alt={item.description} className='cat__item__image' />}
        </figure>
    )
}


const mapPropsToDispatcher = (dispatch) => {
    return {
        saveData: item => dispatch( {
            type:SAVE_CATEGORY,
            payload: item
        } )
    }
}
                    

export default withRouter(connect(null,mapPropsToDispatcher)(ShowCategory));