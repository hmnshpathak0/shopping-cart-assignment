import React from 'react';
import {withRouter} from 'react-router';
import { Form as WrappedForm }  from 'react-advanced-form';
import {Input} from  'react-advanced-form-addons';

function  CustomForm(props){

    const formHandler = ({ serialized, fields, form }) => {
        return props.handler(serialized,fields,form)
      }
    const redirectHandler = ()=> {
        props.history.push('/'+props.url);
    }
    
        return (
            <WrappedForm onSubmitStart={redirectHandler}  action={formHandler} className={props.style}> 
                {
                    props.formInput.map((item,index)=>{
                        return <Input  key={index} name={item.name} type={item.type} required label={item.label}/>
                    })
                   
                }
                <button >{props.submit}</button>
                </WrappedForm>
       
    )
 }


export default withRouter(CustomForm);