import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import loginReducer from './LogIn/reducer';
import scheduleReducer from './Schedule/reducer'
import messagesReducer from './Messages/reducer'

export default combineReducers({
    router: routerReducer,
    loginReducer,
    scheduleReducer,
    messagesReducer
})
