import React from 'react';
import './CustomButton.scss';

function CustomButton(props){
    //invoke parent component call back
    const handleClick = () => {
        props.val? props.handler(props.val):props.handler();
    }
    return (
        <button aria-label={props.label||'none'} onClick={handleClick} aria-controls={props.control || ''} className={props.styleClass||''}>
        {
            !props.rightText?(props.children?props.children:(props.text||'')):(
                <React.Fragment>
                <span>{props.text||''}</span>
                <span>{props.rightText}</span>
                </React.Fragment>
            )
    
        }
        </button>
    )
}
export default CustomButton;