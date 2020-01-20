import React from 'react';
import {connect} from 'react-redux'
import {labelConfig} from '../../../../static/conf/constants';
import CustomButton from '../../atoms/buttons/customButton/customButton';
import {SAVE_CATEGORY} from  '../../../Actions/cartAction/types'
function SideNav(props){
    const [category,setCategory] = React.useState({});

    //this method set the category selected
    const selectCategory = cat => {
        props.saveData(cat)
    }
    return(
        <React.Fragment>
             {
                       props.categories.map(item =>  <CustomButton styleClass='cat_menu_btn' key={item.id} val={item} aria-labels={labelConfig.CatNav} aria-controls={labelConfig.Products} handler={selectCategory} key={item.id} text={item.name}/>)
            }
        </React.Fragment>
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

export default connect(null,mapPropsToDispatcher)(SideNav);