import { SWITCH_VIEW } from './actionTypes'

export default function scheduleReducer(state = {}, action) {
    switch (action.type) {
        case SWITCH_VIEW:
            return { ...state, currentView: action.data };
        default:
            return state;

    }

}