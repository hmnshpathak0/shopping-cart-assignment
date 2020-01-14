//this file is where the action is dispatched

import { SET_CATEGORIES } from './types';
import {fetchRequest} from '../serviceRequest';
import {urlConfig} from '../../../static/conf/constants'


//function to set categories
const setCategories = (item) => {
    if (item && item.length > 0) {
        item = item.filter((category) => category.enabled)
        item.sort((category1, category2) => category1.order - category2.order);
    }
    return { type: SET_CATEGORIES, payload: item };
}


//function to dispatch actions

const fetchData = (url,data) => {
 
    return async (dispatch) => {
        try {
            const response = await fetchRequest(url);
            switch (url) {
                case urlConfig.categoriesUrl: dispatch(setCategories(response.data)); break;
                default: break;
            }
        }
        catch (error) {
           
            throw (error);
        }
    };
};



export {fetchData};



