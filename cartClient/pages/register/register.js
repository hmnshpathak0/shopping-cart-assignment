import React from 'react';
import {connect} from 'react-redux';
import CustomForm from '../../utility/templates/molecules/customForm/customForm';
import registerForm from './registerForm.json';
import './register.scss';
import {labelConfig,urlConfig} from '../../static/conf/constants';
import {postData} from '../../utility/Actions/loginAction/action'
function Register(props){

        const handleSubmit = (serialised,fields,form) => {
            
            return new Promise((resolve,reject)=>{
                resolve(props.postData(urlConfig.registerUrl,JSON.stringify(serialised)))
            })
        }

        return(

            <div className='register'>
                <div className='register_desc'>
                    <h3>{labelConfig.SignIn}</h3>
                    <span>{labelConfig.RegisterMessage}</span>
                </div>
                
                <CustomForm style='register_form' url={urlConfig.homecompUrl} submit={labelConfig.SignIn} handler={handleSubmit} formInput={registerForm} />                
            </div>
        )
   
}

export default connect(null,{postData})(Register);