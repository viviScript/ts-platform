import * as actionTypes from './actionTypes';

const defaultState = {
    userName: '',
    userPassWord: ''
}
export default (state = defaultState, action) => {

    const newState = JSON.parse(JSON.stringify(state));
    switch (action.type) {
        case actionTypes.USER_NAME_CHANGE:
            // console.log(newState)
            newState.userName = action.value;
            return newState;
        case actionTypes.USER_PASSWORD_CHANGE:
            newState.userPassWord = action.value;
            return newState;
        default:
            return state;
    }
}