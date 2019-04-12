import {
    USER_PASSWORD_CHANGE,
    USER_NAME_CHANGE
} from '../actionTypes';

const defaultState = {
    userName: '',
    userPassWord: ''
}
export default (state = defaultState, action) => {

    const newState = JSON.parse(JSON.stringify(state));
    switch (action.type) {
        case USER_NAME_CHANGE:
            console.log(newState)
            newState.userName = action.value;
            return newState;
        case USER_PASSWORD_CHANGE:
            newState.userPassWord = action.value;
            return newState;
        default:
            return state;
    }
}