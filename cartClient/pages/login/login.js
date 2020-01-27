import React from 'react';
import {connect} from 'react-redux';
import CustomForm from '../../utility/templates/molecules/customForm/customForm';
import loginForm from './loginForm.json';
import './login.scss';
import {labelConfig,urlConfig} from '../../static/conf/constants';
import {postData} from '../../utility/Actions/loginAction/action'
function Login(props){

        const handleSubmit = (serialised,fields,form) => {
            
            return new Promise((resolve,reject)=>{
                resolve(props.postData(urlConfig.loginUrl,JSON.stringify(serialised)))
            })
        }

        return(

            <div className='login'>
                <div className='login_desc'>
                    <h3>{labelConfig.Login}</h3>
                    <span>{labelConfig.LoginMessage}</span>
                </div>
                
                <CustomForm style='login_form'  submit={labelConfig.Login} handler={handleSubmit} formInput={loginForm} />                
            </div>
        )
   
}

export default connect(null,{postData})(Login);