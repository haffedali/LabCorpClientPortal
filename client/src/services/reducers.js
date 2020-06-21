import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import loginReducer from './LogIn/reducer';
import scheduleReducer from './Schedule/reducer';
import invoiceReducer from './billing/reducers';

export default combineReducers({
    router: routerReducer,
    loginReducer,
    scheduleReducer,
    invoiceReducer
})
