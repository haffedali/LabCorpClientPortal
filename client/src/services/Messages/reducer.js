import {SWITCH_PAGE} from './actionTypes';

export default function messagesReducer(state = {}, action){
    switch (action.type){
        case SWITCH_PAGE:
            return {...state, currentPage: action.data};
        default:
            return state;
    }
}