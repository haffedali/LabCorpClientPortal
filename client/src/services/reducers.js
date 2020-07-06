import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import loginReducer from './LogIn/reducer';
import invoiceReducer from './billing/reducers';
import scheduleReducer from './Schedule/reducer'
import messagesReducer from './Messages/reducer'
import resultsReducer from './Results/reducer'
import sessionReducer from './Session/reducers';

export default combineReducers({
    router: routerReducer,
    loginReducer,
    scheduleReducer,
    invoiceReducer,
    messagesReducer,
    resultsReducer,
    sessionReducer,
})
