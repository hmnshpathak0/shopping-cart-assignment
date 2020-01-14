import {SET_CATEGORIES,GET_BANNERS} from './types'
//initail state

const initialState = {
    categories:[],
    banners: [],
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
        
        default: return state;
    }
}

export {updateData};