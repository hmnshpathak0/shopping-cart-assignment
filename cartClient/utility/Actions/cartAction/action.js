//this file is where the action is dispatched

import { SET_CATEGORIES,GET_BANNERS ,SET_PRODUCTS,SET_CART_STATUS, SET_CART} from './types';
import {fetchRequest,deleteRequest,putRequest} from '../../utils/serviceRequest';
import {urlConfig} from '../../../static/conf/constants';


//function to set categories
const setCategories = (item) => {
    if (item && item.length > 0) {
        item = item.filter((category) => category.enabled)
        item.sort((category1, category2) => category1.order - category2.order);
    }
    return { type: SET_CATEGORIES, payload: item };
}

//function to get  banners
const getBanners = (item) => {
   
    return { type: GET_BANNERS, payload: item };
}

//function to get  Products
const setProducts = (item) => {
   
    return { type: SET_PRODUCTS, payload: item };
}

//function to get  Cart Status
const setCartStatus = (item) => {
   
    return { type: SET_CART_STATUS, payload: item };
}

//function to get  banners
const getCart = (item) => {
   
    return { type: SET_CART, payload: item };
}

//function to dispatch actions

const fetchData = (url) => {
 
    return async (dispatch) => {
        try {
            const response = await fetchRequest(url);
            switch (url) {
                case urlConfig.categoriesUrl: dispatch(setCategories(response.data)); break;
                case urlConfig.bannersUrl: dispatch(getBanners(response.data)); break;
                case urlConfig.productsUrl: dispatch(setProducts(response.data)); break;
                case urlConfig.productsUrl: dispatch(getCart(response.data)); break;
                default: break;
            }
        }
        catch (error) {
           
            throw (error);
        }
    };
};

 const putData = (url, data) => {
    return async (dispatch) => {
        try {
            const response = await putRequest(url,data)
            switch (url) {
                case Constants.UrlCartApi: dispatch(setCartStatus(response.status)); break;
                default: break;
            };
        }
        catch (error) {
            throw (error);
        }
    };
};

 const deleteData = (url, id) => {
    return async (dispatch) => {
        try {
            const response = await deleteRequest(url,id)
            switch (url) {
                case Constants.UrlCartApi: dispatch(setCartStatus(response.status)); break;
                default: break;
            };
        }
        catch (error) {
            throw (error);
        }
    };
}


export {fetchData,deleteData,putData};



