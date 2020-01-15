import React from 'react';
import './CustomButton.scss';

function CustomButton(props){

    return (
        <button aria-label={props.label||'none'} onClick={props.handler} aria-controls={props.control || ''} className={props.styleClass||''}>
        {props.text||''}
        </button>
    )
}
export default CustomButton;