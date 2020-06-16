import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import loginReducer from './LogIn/reducer';
import scheduleReducer from './Schedule/reducer'

export default combineReducers({
    router: routerReducer,
<<<<<<< HEAD
    sideBarReducer,
    loginReducer,
    scheduleReducer
=======
    loginReducer
>>>>>>> master
})
