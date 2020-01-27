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
    }
}

const getPostRequest = (url,data) => {
    return axios.post(urlConfig.serverUrl+url,data,config)
}

const fetchRequest = (url) => {
    config['headers']['Access-Control-Allow-Methods']='options,get'
    return axios.get(urlConfig.serverUrl+url,config)
}

const putRequest = (url,data) => {
    config['headers']['Access-Control-Allow-Methods']='options,put'
    return axios.put(urlConfig.serverUrl+url+'/'+data.id,data,config)
}

const deleteRequest = (url,id) => {
    config['headers']['Access-Control-Allow-Methods']='options,delete'
    return axios.get(urlConfig.serverUrl+url+'/'+id,config)
}

export  {
    getPostRequest,
    fetchRequest,
    putRequest,
    deleteRequest
}

