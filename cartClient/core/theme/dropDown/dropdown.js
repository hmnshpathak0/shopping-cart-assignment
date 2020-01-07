import React from 'react';
import './DropDown.scss';

function DropDown(props) {
  return (
      
    <div className={props.toggle?"header_dropdown show":"header_dropdown"}>
    <a href="home">Home</a>
    <a href="home">Products</a>
    </div>
  );
}

export default DropDown;
