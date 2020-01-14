import React from 'react';
import './DropDown.scss';
import {NavLink} from 'react-router-dom';
import links from  '../../templates/header/links.json'

function DropDown(props) {
  return (
      
    <div style={{transform:"translate3d(0,"+props.height+"px,0)"}} className={props.toggle?"header_dropdown header_dropdown-display":"header_dropdown"}>
   
   {links.map((nav,index) =>{
               return  <NavLink aria-label={nav.name} key={index}  to={'/'+nav.url}>{nav.name}</NavLink>
            })
        }
        </div>
  );
}

export default DropDown;
