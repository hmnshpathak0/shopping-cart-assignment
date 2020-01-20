import React from 'react';
import './CustomButton.scss';

function CustomButton(props){
    //invoke parent component call back
    const handleClick = () => {
        props.key? props.handler(key):props.handler();
    }
    return (
        <button aria-label={props.label||'none'} onClick={handleClick} aria-controls={props.control || ''} className={props.styleClass||''}>
        {props.text||''}
        </button>
    )
}
export default CustomButton;