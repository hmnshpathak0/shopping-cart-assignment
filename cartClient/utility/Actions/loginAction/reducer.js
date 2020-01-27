import {SET_REGISTRATION_STATUS,SET_LOGIN_STATUS,GET_USERS} from './types'
//initail state

const initialState = {
    loginStatus:'',
    RegistrationStatus: '',
    Users:[],
};


//function to update state  variables
const updateLoginData = (state = initialState, action) => {
    switch (action.type) {
        case GET_USERS: return Object.assign({}, state, {
            Users: action.payload
        });
        case SET_LOGIN_STATUS: return Object.assign({}, state, {
            loginStatus: action.payload
        });
        case SET_REGISTRATION_STATUS: return Object.assign({}, state, {
            RegistrationStatus: action.payload
        });
        
        default: return state;
    }
}

export {updateLoginData};