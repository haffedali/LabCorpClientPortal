import {SWITCH_VIEW, GET_DATA} from './actionTypes'
import { appointmentsApi } from "../../utils";

export const switchView = (view, id) => {
    return dispatch => {
        appointmentsApi
        .query(id.id)
        .then((res) => {
            console.log(res)
            const contactId = res.data
            dispatch(_getAppointments(contactId))
        })
        dispatch(_switchView(view))
    }
}

const _switchView = (view) => {
    return {
        type: SWITCH_VIEW,
        data: view
    }
}

const _getAppointments =  (id) => {
    return {
        type: GET_DATA,
        data: id
    }
}
