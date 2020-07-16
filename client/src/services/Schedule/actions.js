import { GET_DATE, GET_START_TIME, GET_END_TIME, SEND_DATE_PENDING, SEND_DATE_SUCCESS, SEND_DATE_FAILED, GET_SUBJECT, ALERT_CLOSED } from './actionTypes'
import { appointmentsApi } from '../../utils'

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

export const getSubject = (subject) => {
    return (dispatch) => {
        dispatch(_getSubject(subject))
    }
}

export const createAppointment = (date) => {
    return (dispatch) => {
        dispatch(_getDatePending())

        appointmentsApi
            .createApp(date)
            .then(res => {
                dispatch(_createAppointmentSuccess(res));
            })
            .catch((error) => {
                console.log(error);
                dispatch(_createAppointmentFailed(error))
            })
    }
}

export const hideAlert = () => {
    return (dispatch) => {
        dispatch(_hideAlert())
    }
}

const _hideAlert = () => {
    return {
        type: ALERT_CLOSED,
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

const _getSubject = (subject) => {
    return {
        type: GET_SUBJECT,
        data: subject
    }
}

const _getDatePending = () => {
    return {
        type: SEND_DATE_PENDING
    }
}

const _createAppointmentSuccess = (res) => {
    return {
        type: SEND_DATE_SUCCESS,
        data: res.data
    }
}

const _createAppointmentFailed = (error) => {
    return {
        type: SEND_DATE_FAILED,
        error
    }
}