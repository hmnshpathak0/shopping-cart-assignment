import React from 'react';
import {connect} from 'react-redux';
import {Dropdown} from 'react-bootstrap';
import {SAVE_CATEGORY} from '../../../Actions/cartAction/types';
import {labelConfig} from '../../../../static/conf/constants'
import './catMenu.scss';

function CatMenu(props){
    const {categories} = props;
    const {category} =props;
    const selectElememt = React.createRef();

    const changeCategory = () => {
        let cat = categories.find(item => item.name == selectElememt.current.value)
        if(cat)
            props.saveCategory(cat)
    }
    return(
       <React.Fragment>
           <select  value={category.name?category.name:""} className='cat_dropdown_select' name='selectedCategory' ref={selectElememt} onChange={changeCategory}>
          <option value=''>{labelConfig.SelectCategory}</option>
            {     
               categories.map(item =>  <option key={item.id}  value={item.name}>{item.name}</option>)
                    
            }            
            </select>
        </React.Fragment>
    )
}
const mapDispatcherToProps = dispatch => {
    return {
        saveCategory: item => dispatch({
            type: SAVE_CATEGORY,
            payload: item
        }) 
    }
}

export default connect(null,mapDispatcherToProps)(CatMenu);