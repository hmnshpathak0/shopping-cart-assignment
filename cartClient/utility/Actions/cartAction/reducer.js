import {SET_CATEGORIES,GET_BANNERS,DELETE_CART,CART_OPEN_STATUS ,MODIFY_CART,SAVE_CATEGORY,SET_PRODUCTS,SET_CART,SET_CART_STATUS} from './types'
//initail state

const initialState = {
    categories:[],
    banners: [],
    category:{},
    products:[],
    cart: [],
    cartOpen: false
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
        case CART_OPEN_STATUS: return Object.assign({}, state, {
            cartOpen: action.payload
        });
        case MODIFY_CART: 
                let index = state.cart.findIndex(item => item.id == action.payload.id);
                state.cart[index].quantity = action.payload.quantity;
                return Object.assign({}, state, {
                    cart: JSON.parse(JSON.stringify(state.cart))
                });

        
        default: return state;
    }
}

export {updateData};