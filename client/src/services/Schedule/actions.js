import { GET_DATE, GET_START_TIME, GET_END_TIME } from './actionTypes'


export const getDate = (date) => {
    return (dispatch) => {
        const d = date
        const ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(d)
        const mo = new Intl.DateTimeFormat('en', { month: 'long' }).format(d)
        const da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(d)
        const formatDate = `${mo}-${da}-${ye}`
        dispatch(_getDate(formatDate))
    }
}

export const getStart = (time) => {
    return (dispatch) => {
        const t = time;
        const newTime = t.toLocaleTimeString(); 
        dispatch(_getStartTime(newTime))
    }
}

export const getEnd = (time) => {
    return (dispatch) => {
        const t = time;
        const newTime = t.toLocaleTimeString();
        dispatch(_getEndTime(newTime))
    }
}
const _getDate = (date) => {
    return {
        type: GET_DATE,
        data: date

    }
}

const _getStartTime = (time) => {
    return {
        type: GET_START_TIME,
        data: time
    }
}

const _getEndTime = (time) => {
    return {
        type: GET_END_TIME,
        data: time
    }
}
