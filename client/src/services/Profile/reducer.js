import {UPDATE_FAILED, UPDATE_PENDING, UPDATE_SUCCESS} from './actionTypes';
import { updateObject } from '../utils'


const initialState = { updating: false }

export default function profileUpdateReducer(state = initialState, action){
    switch (action){
        case UPDATE_PENDING: 
            return updateObject( state, { updating: false });
        case UPDATE_SUCCESS:
            return updateObject( state, { updating: false });
        case UPDATE_FAILED:
            return updateObject( state, {
                requestFailed: true,
                updating: false })
        default:
            return state
    }
}
