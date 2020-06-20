import { SWITCH_VIEW, GET_DATA, GET_DATA_FAILED, GET_DATA_PENDING } from './actionTypes'

export default function scheduleReducer(state = {}, action) {
    switch (action.type) {
        case SWITCH_VIEW:
            return { ...state, currentView: action.data };
        case GET_DATA:
            return {
                ...state, appointmentData: {
                    ...action.appointmentdata, requestSucessful: true
                }
            };
        case GET_DATA_PENDING:
            return { ...state, appointmentData: { requestPending: true } };
        case GET_DATA_FAILED:
            return {...state, appointmentData: { requestFailed: true} };
        default:
            return state;
    }
}