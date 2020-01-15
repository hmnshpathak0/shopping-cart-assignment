import React from 'react'
import CustomButton from '../../atoms/buttons/CustomButton/customButton';
import {labelConfig} from '../../../../static/conf/constants'
import './showCategory.scss';

function ShowCategory(props){
    const {item} = props;
    const chooseCategory = () => {

    }
    return (
        <figure className='home_category_item' arial-label={item.name} aria-describedby={item.description} >
             <img src={item.imageUrl} alt={item.description} className='home_category_image' />
             <div className='home_category_description'>
             <span>{item.name}</span>
             <figcaption>
                 <span>{item.description}</span>
            </figcaption>
            <div className='home_category_btn_div'>
            <CustomButton text={labelConfig.Explore+item.key} handler={chooseCategory} styleClass='home_category_btn' label={labelConfig.Explore+item.key}/>
            </div>
        </div>
        </figure>
    )
}

export default ShowCategory;