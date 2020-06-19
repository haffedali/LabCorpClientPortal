import {UPDATE_FAILED, UPDATE_PENDING, UPDATE_SUCCESS} from './actionTypes';

export default function profileUpdateReducer(state = {}, action){
    switch (action){
        case UPDATE_PENDING: 
            return {...state, updateStatus: "pending"}
        case UPDATE_SUCCESS:
            return {...state, updateStatus: true}
        case UPDATE_FAILED:
            return {...state, updateStatus: false}
        default:
            return state
    }
}
