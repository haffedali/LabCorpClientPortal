import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import loginReducer from './LogIn/reducer';

export default combineReducers({
    router: routerReducer,
    loginReducer
})
