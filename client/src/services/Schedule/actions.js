import { GET_DATE, SEND_DATE } from './actionTypes'


export const getDate = (date) => {
    return dispatch => {
        dispatch(_getDate(date))
    }
}

export const getStart = (time) => {
    return dispatch => {
        dispatch(_getStart(time))
    }
}

export const getEnd = (time) => {
    return dispatch => {
        dispatch(_getEnd(time))
    }
}

const _getDate = (date) => {
    return {
        type: GET_DATE,
        data: date
    }
}

const _getStart = (time) => {
    return {
        type: GET_DATE,
        data: time
    }
}

const _getEnd = (time) => {
    return {
        type: GET_DATE,
        data: time
    }
}