import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import loginReducer from './LogIn/reducer';
<<<<<<< HEAD
import messagesReducer from './Messages/reducer';

export default combineReducers({
    router: routerReducer,
    sideBarReducer,
    loginReducer,
    messagesReducer
=======
import scheduleReducer from './Schedule/reducer'

export default combineReducers({
    router: routerReducer,
    loginReducer,
    scheduleReducer
>>>>>>> master
})
