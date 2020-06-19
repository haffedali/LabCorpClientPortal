import {LOGIN_FAILED, LOGIN_PENDING, LOGIN_SUCCESS, LOGOUT} from './actionTypes';

export default function loginReducer(state = {}, action){
    switch (action.type){
        case LOGIN_PENDING:
            return {...state, loggedIn: "pending"}
        case LOGIN_SUCCESS:
            return {...state, loggedIn: true, userInfo: {
                ...action.userInfo
            }}
        case LOGIN_FAILED:
            return {...state, loggedIn: false}
        case LOGOUT:
            return {...state, loggedIn: false, userInfo: {
                name: '',
                id: ''
            }}
        default:
            return state
    }
}