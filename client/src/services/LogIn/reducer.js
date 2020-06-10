import {LOGIN_FAILED, LOGIN_PENDING, LOGIN_SUCCESS} from './actionTypes';

export default function loginReducer(state = {}, action){
    switch (action.type){
        case LOGIN_PENDING:
            return {...state, loggedIn: "pending"}
        case LOGIN_SUCCESS:
            return {...state, loggedIn: true}
        case LOGIN_FAILED:
            return {...state, loggedIn: false}
        default:
            return state
    }
}