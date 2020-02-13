import React from 'react';
import './CustomButton.scss';

function CustomButton(props){
    //invoke parent component call back
    const handleClick = () => {
        props.val? props.handler(props.val):props.handler();
    }

    const changeFocus = () => {
        if(props.onfocusout){
            props.onfocusout();
        }
    }

    if(props.label){
    return (
        <button  aria-label={props.label} onClick={handleClick}  className={props.styleClass||''}>
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
    }else{
        return (
            <button  onClick={handleClick}  className={props.styleClass||''}>
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
}
export default CustomButton;