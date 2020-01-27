import {SET_CATEGORIES,GET_BANNERS,DELETE_CART, SAVE_CATEGORY,SET_PRODUCTS,SET_CART,SET_CART_STATUS} from './types'
//initail state

const initialState = {
    categories:[],
    banners: [],
    category:{},
    products:[],
    cart: [],
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
        case SET_CART_STATUS: return Object.assign({}, state, {
            cartStatus: action.payload
        });
        case SET_CART: return Object.assign({}, state, {
            cart: [...state.cart,action.payload]
        });
        case DELETE_CART: return Object.assign({}, state, {
            cart: state.cart.filter(item =>payload.id == item.id)
        });
        
        default: return state;
    }
}

export {updateData};