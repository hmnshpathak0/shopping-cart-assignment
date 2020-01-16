import {SET_CATEGORIES,GET_BANNERS, SAVE_CATEGORY} from './types'
//initail state

const initialState = {
    categories:[],
    banners: [],
    category:{},
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
        
        default: return state;
    }
}

export {updateData};