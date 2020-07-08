import {
    UPDATE_FAILED,
    UPDATE_SUCCESS,
    UPDATE_PENDING
} from './actionTypes';


export const updateAttempt = (userInfo) => {
    // return (dispatch) => {
    //     // Make update api call

    // }
    let updateData = {
        address = userInfo.address,
        city: userInfo.city,
        state: userInfo.state,
        zipCode: userInfo.zipCode,
        phone: userInfo.phone,
    };
    const config = {

    };
}
