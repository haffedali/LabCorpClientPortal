import {SWITCH_VIEW} from './actionTypes'

export const switchView = (view) => {
    return dispatch => {
        dispatch(_switchView(view))
    }
}

const _switchView = (view) => {
    return {
        type: SWITCH_VIEW,
        data: view
    }
}