import { GET_DATE, SEND_DATE, GET_START_TIME, GET_END_TIME } from './actionTypes'


export default function scheduleReducer(state = {}, action) {
    switch (action.type) {
        case GET_DATE:
            return {
                ...state, date: action.data 
            };
        case GET_START_TIME:
            return {
                ...state, startTime: action.data
            }
        case GET_END_TIME:
            return {
                ...state, endTime: action.data
            }
        case SEND_DATE:
            let newDate = [...state.date]
            newDate.push(action.data)
            return { ...state, scheduledTime: { date: newDate } }
        default:
            return state

    }
}