import * as actionTypes from './actionTypes';
import { fromJS } from 'immutable';  // 引入immutable库

/*
* 在redux中reducer需要返回一个函数；
* 函数接受两个参数：state(仓库数据), action
* reducer函数必须返回出一个state数据对象树
* */

/*
* 将state利用immutable提供对fromJS方法
* 转成immutable对象 不可改变的对象*/
const defaultState = fromJS({
    userName: '',
    userPassWord: '',
    loading: false
});

/*
* store接受到dispatch传递过来到action
* (previousState当前state数据, action)
* reducer 可以接受state,但是绝不能修改state
* 纯函数指到是，给定固定到输入，就一定会有固定到输出，而且不会有任何到副作用
* */
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