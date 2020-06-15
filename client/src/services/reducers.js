import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import sideBarReducer from './SideBar/reducer';
import loginReducer from './LogIn/reducer';
import scheduleReducer from './Schedule/reducer'

export default combineReducers({
    router: routerReducer,
    sideBarReducer,
    loginReducer,
    scheduleReducer
})
