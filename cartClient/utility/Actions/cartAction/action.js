//this file is where the action is dispatched

import { SET_CATEGORIES,GET_BANNERS ,SET_PRODUCTS} from './types';
import {fetchRequest} from '../../utils/serviceRequest';
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

//function to get  banners
const setProducts = (item) => {
   
    return { type: SET_PRODUCTS, payload: item };
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
                default: break;
            }
        }
        catch (error) {
           
            throw (error);
        }
    };
};



export {fetchData};



