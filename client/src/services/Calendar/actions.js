import { SWITCH_VIEW, GET_DATA, GET_DATA_PENDING, GET_DATA_FAILED } from './actionTypes'
import { appointmentsApi } from "../../utils";

export const switchView = (view) => {
    return dispatch => {
        dispatch(_switchView(view))
    }
}

export const getData = (id) => {
    return dispatch => {
        dispatch(_getAppointmentsStarted())

        appointmentsApi
            .query(id)
            .then((res) => {
                const appData = res.data.value;
                    dispatch(_getAppointments(appData))
            })
            .catch((error) => {
                console.log(error);
                dispatch(_getAppointmentsFailed(error))
            })
    }
}

const _switchView = (view) => {
    return {
        type: SWITCH_VIEW,
        data: view
    }
}

const _getAppointmentsStarted = () => {
    return {
        type: GET_DATA_PENDING
    }
}

const _getAppointments = (appData) => {
    return {
        type: GET_DATA,
        data: appData
    }
}

const _getAppointmentsFailed = (error) => {
    return {
        type: GET_DATA_FAILED,
        error
    }
}
