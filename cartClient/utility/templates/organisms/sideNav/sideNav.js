import React from 'react';
import {connect} from 'react-redux'
import {labelConfig} from '../../../../static/conf/constants';
import CustomButton from '../../atoms/buttons/customButton/customButton';
import {SAVE_CATEGORY} from  '../../../Actions/cartAction/types'
function SideNav(props){
    //this method set the category selected 
    const selectCategory = cat => {
        if(props.cat.id && props.cat.id == cat.id){
            props.saveData({})     
        }
        else{
            props.saveData(cat);
        }
    }
    return(
        <React.Fragment>
             {
                       props.categories.map(item =>  <div key={item.id} className='cat_menu_action'><CustomButton styleClass='cat_menu_btn'  val={item} aria-labels={labelConfig.CatNav} aria-controls={labelConfig.Products} handler={selectCategory} key={item.id} text={item.name}/></div>)
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