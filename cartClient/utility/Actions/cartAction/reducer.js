import {SET_CATEGORIES,GET_BANNERS, SAVE_CATEGORY,SET_PRODUCTS} from './types'
//initail state

const initialState = {
    categories:[],
    banners: [],
    category:{},
    products:[],
};


//function to update state  variables
const updateData = (state = initialState, action) => {
    switch (action.type) {
        case SET_CATEGORIES: return Object.assign({}, state, {
            categories: action.payload
        });
        case GET_BANNERS: return Object.assign({}, state, {
            banners: action.payload
        });
        case SAVE_CATEGORY: return Object.assign({}, state, {
            category: action.payload
        });
        case SET_PRODUCTS: return Object.assign({}, state, {
            products: action.payload
        });
        
        default: return state;
    }
}

export {updateData};