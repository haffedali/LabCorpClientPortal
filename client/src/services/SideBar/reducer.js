import {SWITCH_PAGE} from './actionTypes';

const initialState = {
    currentPage: "",
}

export default function sideBarReducer(state=initialState, action){
    switch (action.type){
        case SWITCH_PAGE:
            return {...state, currentPage: action.data};
        default:
            return state;
    }
}