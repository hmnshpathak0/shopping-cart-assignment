//this file is the main reducer file for redux store

import { combineReducers } from 'redux';
import {updateData} from '../utility/Actions/cartAction/reducer'



const reducer = combineReducers({ updateData });

export default reducer;