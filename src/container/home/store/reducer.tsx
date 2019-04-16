import * as actionTypes from './actionTypes';
import { fromJS } from 'immutable';  // 引入immutable库
/*
* 将state利用immutable提供对fromJS方法
* 转成immutable对象 不可改变的对象*/
const defaultState = fromJS({
    list: []
});
export default (state = defaultState, action) => {
    // const newState = JSON.parse(JSON.stringify(state));
    switch (action.type) {
        case actionTypes.HOME_MENU_LIST:
            return state.set('list', action.value);
        default:
            return state;
    }
}