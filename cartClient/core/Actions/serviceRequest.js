//this file is used to make http request to end point APIs

import axios from 'axios';
import {urlConfig} from '../../static/conf/constants'

const config = {
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': urlConfig.clientUrl,
        'cross-origin': true,
        'Access-Control-Allow-Methods':'options,post',
        'Access-Control-Allow-Headers' : 'Origin, Content-Type, Accept,Access-Control-Allow-Origin,cross-origin,Access-Control-Allow-Methods'
    }
}

const getPostRequest = (url,data) => {
    return axios.post(urlConfig.serverUrl+url,data,config)
}

export default getPostRequest;

