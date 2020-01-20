import React from 'react';
import {labelConfig} from '../../../../static/conf/constants';
import CustomButton from '../../atoms/buttons/customButton/customButton'
function SideNav(props){
    const [category,setCategory] = React.useState({});

    //this method set the category selected
    const selectCategory = cat => {
        props.handler(cat)
    }
    return(
        <React.Fragment>
             {
                       props.categories.map(item =>  <CustomButton styleClass='cat_menu_btn' key={item} aria-labels={labelConfig.CatNav} aria-controls={labelConfig.Products} handler={selectCategory} key={item.id} text={item.name}/>)
            }
        </React.Fragment>
    )
}

export default SideNav;