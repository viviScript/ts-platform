import {
    USER_NAME_CHANGE,
    USER_PASSWORD_CHANGE
} from './actionTypes';
export const getUserNameChange = (value) => ({
    type: USER_NAME_CHANGE,
    value
});

export const getUserPassWordChange = (value) => ({
    type: USER_PASSWORD_CHANGE,
    value
});