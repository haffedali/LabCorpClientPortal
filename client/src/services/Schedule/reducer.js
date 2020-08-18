import { GET_DATE, SEND_DATE, GET_START_TIME, GET_END_TIME, GET_SUBJECT, SEND_DATE_PENDING, SEND_DATE_SUCCESS, SEND_DATE_FAILED, ALERT_CLOSED } from './actionTypes'

export default function scheduleReducer(state = {}, action) {
    switch (action.type) {
        case GET_DATE:
            return { ...state, date: action.data };
        case GET_START_TIME:
            return { ...state, startTime: action.data }
        case GET_END_TIME:
            return { ...state, endTime: action.data }
        case GET_SUBJECT:
            return { ...state, subject: action.data }
        case SEND_DATE_PENDING:
            return { ...state, request: 'Pending' }
        case SEND_DATE_SUCCESS:
            return { ...state, request: 'Success' }
        case SEND_DATE_FAILED:
            return { ...state, request: 'Failed'}
        case ALERT_CLOSED:
            return { ...state, alertOpen: false, request: 'Done'}
        default:
            return state

    }
}