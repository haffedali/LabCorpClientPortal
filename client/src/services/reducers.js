import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import sideBarReducer from './SideBar/reducer';
import loginReducer from './LogIn/reducer';
import messagesReducer from './Messages/reducer';

export default combineReducers({
    router: routerReducer,
    sideBarReducer,
    loginReducer,
    messagesReducer
})
