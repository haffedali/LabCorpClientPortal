import {
    UPDATE_FAILED,
    UPDATE_SUCCESS,
    UPDATE_PENDING
} from './actionTypes';


export const updateAttempt = (userInfo) => {
    let updateUserInfo = {
        address = userInfo.address,
        city: userInfo.city,
        state: userInfo.state,
        zipCode: userInfo.zipCode,
        phone: userInfo.phone,
    };
    const config = {
        method: "patch",
        "OData-MaxVersion": 4.0,
        "OData-Version": 4.0,
        Accept: "application/json",
        "Content-Type": "application/json; charset=utf-8",
        headers: {
            Prefer: "odata.include-annotations=*",
        },
        data: updateUserInfo,
    };
    return (dispatch) => {
        // Make update api calls
        dispatch(_updateProfileStarted());
        adalApiFetch (
            axios,
            "https://sswilbobraggins.crm.dynamics.com/api/v9.1/contacts("
            + userInfo.contactId + ")",
            config
        )  
            .then ((res) => {
                dispatch(_updateProfileSuccess(res));
                // dispatch(readProfile());
            })
            .catch ((error) => {
                console.log(error);
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
