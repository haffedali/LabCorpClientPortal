import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import sideBarReducer from './SideBar/reducer';

export default combineReducers({
    router: routerReducer,
    sideBarReducer
})
