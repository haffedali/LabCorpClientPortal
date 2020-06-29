import {GET_DATE, SEND_DATE} from './actionTypes'


export default function scheduleReducer(state = {}, action) {
    switch (action.type) {
        case GET_DATE:
            return { ...state, scheduledTime: { date: action.data, startTime: action.data, endTime: action.data } };
        case SEND_DATE:
            let newDate = [...state.date]
            newDate.push(action.data)
            return { ...state, scheduledTime: {date: newDate} }
        default:
            return state

    }
}