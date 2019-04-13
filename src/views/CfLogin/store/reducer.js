import * as actionTypes from './actionTypes';
import { fromJS} from 'immutable';  // 引入immutable库
/*
* 将state利用immutable提供对fromJS方法
* 转成immutable对象 不可改变的对象*/
const defaultState = fromJS({
    userName: '',
    userPassWord: '',
    loading: false
});
export default (state = defaultState, action) => {
    // const newState = JSON.parse(JSON.stringify(state));
    switch (action.type) {
        case actionTypes.USER_NAME_CHANGE:
            // console.log(newState)
            return state.set('userName', action.value);
        case actionTypes.USER_PASSWORD_CHANGE:
            return state.set('userPassWord', action.value);
        case actionTypes.LOGIN_LOADING:
            return state.set('loading', action.value);
        default:
            return state;
    }
}