import {SWITCH_PAGE} from './actionTypes';

export const switchPage = (page) => {
    return dispatch => {
        dispatch(_switchPage(page))
    }
}

const _switchPage = (page) => {
    return {
        type: SWITCH_PAGE,
        data: page
    }
}