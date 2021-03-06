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
    list: [],
    breadcrumbNameMap: {
        '/home': '主页'
    }
});

/*
* store接受到dispatch传递过来到action
* (previousState当前state数据, action)
* reducer 可以接受state,但是绝不能修改state
* 纯函数指到是，给定固定到输入，就一定会有固定到输出，而且不会有任何到副作用
* */
export default (state = defaultState, action:any) => {
    // const newState = JSON.parse(JSON.stringify(state));
    switch (action.type) {
        case actionTypes.HOME_MENU_LIST:
            return state.set('list', action.value);
        case actionTypes.BREACRUM_NAME_MAP:
            // console.log(state.get('breadcrumbNameMap'), 'breadcrumbNameMap')
            // return state.merge(state.get('breadcrumbNameMap'), action.value)
            // state.get('breadcrumbNameMap').merge(action.value)
            return state.set('breadcrumbNameMap', state.get('breadcrumbNameMap').merge(action.value));    
        default:
            return state;
    }
}