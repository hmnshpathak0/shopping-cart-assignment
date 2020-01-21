import React from 'react';
import {connect} from 'react-redux';
import {Dropdown} from 'react-bootstrap';
import {SAVE_CATEGORY} from '../../../Actions/cartAction/types';
import {labelConfig} from '../../../../static/conf/constants'
function CatMenu(props){
    const {categories} = props;
    const {category} =props;
    return(
       <React.Fragment>
        <Dropdown   role='menu'>
            <Dropdown.Toggle  id="cat_dropdown">
            {category.name?category.name:labelConfig.SelectCategory}
            </Dropdown.Toggle>
        <Dropdown.Menu >
            {
            props.categories.map(item => <Dropdown.Item  key={item.id} >{item.name}</Dropdown.Item> )
            }
        </Dropdown.Menu>
    </Dropdown>
           
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