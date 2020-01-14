import {SET_CATEGORIES} from './types'
//initail state

const initialState = {
    categories:''
};


//function to update state  variables
const updateData = (state = initialState, action) => {
    switch (action.type) {
        case SET_CATEGORIES: return Object.assign({}, state, {
            categories: action.payload
        });
        
        default: return state;
    }
}

export {updateData};