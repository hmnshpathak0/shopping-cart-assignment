//this file is the main reducer file for redux store

import { combineReducers } from 'redux';
import {updateData} from '../utility/Actions/cartAction/reducer';
import {updateLoginData} from '../utility/Actions/loginAction/reducer'



const reducer = combineReducers({ updateData,updateLoginData });

export default reducer;