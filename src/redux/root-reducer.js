import {combineReducers} from 'redux';

import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reduucer';

export default combineReducers({
    user: userReducer,
    cart: cartReducer
})