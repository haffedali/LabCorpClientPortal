import { GET_DATE, SEND_DATE, GET_START_TIME, GET_END_TIME, SEND_DATE_PENDING, SEND_DATE_SUCCESS, SEND_DATE_FAILED } from './actionTypes'

export default function scheduleReducer(state = {}, action) {
    switch (action.type) {
        case GET_DATE:
            return { ...state, date: action.data };
        case GET_START_TIME:
            return { ...state, startTime: action.data }
        case GET_END_TIME:
            return { ...state, endTime: action.data }
        case SEND_DATE_PENDING:
            return { ...state, request: 'Pending' }
        case SEND_DATE_SUCCESS:
            return { ...state, request: 'Success' }
        case SEND_DATE_FAILED:
            return { ...state, request: 'Failed'}
        default:
            return state

    }
}