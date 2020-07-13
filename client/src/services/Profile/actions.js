import {
    UPDATE_FAILED,
    UPDATE_SUCCESS,
    UPDATE_PENDING
} from './actionTypes';
import updateConfigGenerator from "../../utils/APIHeaders";
import { profileApi } from "../../utils/profileApi";


export const updateProfile = (userInfo, contactId) => {
    return (dispatch) => {
        // Make update api calls
        dispatch(_updateProfileStarted());
        return profileApi.patchProfileUpdate(userInfo, contactId).then((res) => {
                dispatch(_updateProfileSuccess(res));
            })
            .catch ((error) => {
                // console.log(error);
                dispatch(_updateProfileFailed(error));
            });
    };
};

const _updateProfileStarted = () => {
    return {
        type: UPDATE_PENDING,
    }
};

const _updateProfileSuccess = (res) => {
    return {
        type: UPDATE_SUCCESS,
    }
};

const _updateProfileFailed = (error) => {
    return {
        type: UPDATE_FAILED,
    }
};
