import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import loginReducer from './LogIn/reducer';
import scheduleReducer from './Schedule/reducer'
import * as ducks from './ducks';

export default combineReducers({
    router: routerReducer,
    loginReducer,
    scheduleReducer,
    ducks
})
