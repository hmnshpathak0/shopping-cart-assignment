import React from 'react';
import './DropDown.scss';
import {NavLink} from 'react-router-dom';
import links from  '../../organisms/header/links.json';

function DropDown(props) {

  const navItems = props.loginStatus=='200'?links.slice(0,2):links;
  console.log(props.toggle);
 
  return (
      
    <div id='header__dropdown' style={{transform:"translate3d(0,"+props.height+"px,0)"}} className={props.toggle?"header__dropdown header__dropdown--display":"header__dropdown"}>
   
   {
   
   
   navItems.map((nav,index) =>{
               return  <NavLink  aria-label={nav.name} key={index}  to={'/'+nav.url}>{nav.name}</NavLink>
            })
        }
        </div>
  );
}


export default DropDown;
