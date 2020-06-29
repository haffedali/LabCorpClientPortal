import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import loginReducer from './LogIn/reducer';
import calendarReducer from './Calendar/reducer';
import messagesReducer from './Messages/reducer';
import scheduleReducer from './Schedule/reducer';

export default combineReducers({
    router: routerReducer,
    loginReducer,
    calendarReducer,
    scheduleReducer,
    messagesReducer
})
