import React from 'react';
import './DropDown.scss';
import {NavLink} from 'react-router-dom';
import links from  '../../templates/header/links.json'

function DropDown(props) {
  return (
      
    <div style={{transform:"3D(0,"+props.height+",0)"}} className={props.toggle?"header_dropdown header_dropdown-show":"header_dropdown"}>
   
   {links.map((nav,index) =>{
               return  <NavLink aria-label={nav.name} key={index}  to={'/'+nav.url}>{nav.name}</NavLink>
            })
        }
        </div>
  );
}

export default DropDown;
