import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import loginReducer from './LogIn/reducer';
import calendarReducer from './Calendar/reducer';
import messagesReducer from './Messages/reducer';
import scheduleReducer from './Schedule/reducer';
import invoiceReducer from './billing/reducers';
import resultsReducer from './Results/reducer';

export default combineReducers({
    router: routerReducer,
    loginReducer,
    calendarReducer,
    scheduleReducer,
    invoiceReducer,
    messagesReducer,
    resultsReducer,
})
