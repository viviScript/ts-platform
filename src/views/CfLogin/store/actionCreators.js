import * as actionTypes from './actionTypes';
export const getUserNameChange = (value) => ({
    type: actionTypes.USER_NAME_CHANGE,
    value
});

export const getUserPassWordChange = (value) => ({
    type: actionTypes.USER_PASSWORD_CHANGE,
    value
});