import React from 'react';
import { Form as WrappedForm }  from 'react-advanced-form';
import {Input ,Button} from  'react-advanced-form-addons';
import {labelConfig} from '../../../../static/conf/constants'

function  CustomForm(props){

    const formHandler = ({ serialized, fields, form }) => {
        return props.handler(serialized,fields,form)
      }
    
        return (
            <WrappedForm action={formHandler} className={props.style}> 
                {
                    props.formInput.map((item,index)=>{
                        return <Input key={index} name={item.name} type={item.type} required label={item.label}/>
                    })
                   
                }
                <input  type='submit' value={props.submit}/>
                </WrappedForm>
       
    )
 }


export default CustomForm;