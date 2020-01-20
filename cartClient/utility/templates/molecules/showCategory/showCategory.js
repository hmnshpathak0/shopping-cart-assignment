import React from 'react';
import {withRouter} from 'react-router-dom';
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
        props.history.push('/'+urlConfig.productcompUrl)
    }
    return (
        <figure className='cat_item line line-bottom-grey' arial-label={item.name} aria-describedby={item.description} >
            { ((props.index)%2==0)&&<img src={item.imageUrl} alt={item.description} className='cat_image' />}
             <div className='cat_description'>
             <span>{item.name}</span>
             <figcaption>
                 <span>{item.description}</span>
            </figcaption>
            <div className='cat_action'>
            <CustomButton text={labelConfig.Explore+item.key} handler={chooseCategory} styleClass='cat_action_btn' label={labelConfig.Explore+item.key}/>
            </div>
        </div>
        { ((props.index)%2==1)&&<img src={item.imageUrl} alt={item.description} className='cat_image' />}
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