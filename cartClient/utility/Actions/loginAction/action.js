//this file is where the action is dispatched

import { SET_LOGIN_STATUS,SET_REGISTRATION_STATUS,} from './types';
import {getPostRequest} from '../../utils/serviceRequest';
import {urlConfig} from '../../../static/conf/constants';



//function to get  banners
const setLoginStatus = (item) => {
   
    return { type: SET_LOGIN_STATUS, payload: item };
}

//function to get  banners
const setRegistrationStatus = (item) => {
   
    return { type: SET_REGISTRATION_STATUS, payload: item };
}




//function to dispatch actions

const postData = (url,data) => {
    return async (dispatch) => {
        try {
            const response = await getPostRequest(url,data);
            switch (url) {
                case urlConfig.loginUrl: dispatch(setLoginStatus(response.status)); break;
                case urlConfig.registerUrl: dispatch(setRegistrationStatus(response.status)); break;
                default: break;
            }
        }
        catch (error) {
           
            throw (error);
        }
    };
};



export {postData};



