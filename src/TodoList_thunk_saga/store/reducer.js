/*
* 在redux中reducer需要返回一个函数；
* 函数接受两个参数：state(仓库数据), action
* reducer函数必须返回出一个state数据对象树
* */
import {
    CHANGE_INPUT_VALUE,
    ADD_TODO_ITEM,
    DELETE_TODO_ITEM,
    INIT_LIST_ACTION
} from './actionTypes'    // 引入action常量

// redux仓库存储默认数据
const defaultState = {
    inputValue: '',
    list: []
};
/*
* store接受到dispatch传递过来到action
* (previousState当前state数据, action)
* reducer 可以接受state,但是绝不能修改state
* 纯函数指到是，给定固定到输入，就一定会有固定到输出，而且不会有任何到副作用
* */
export default (state = defaultState, action) => {
    console.log(state, action, '触发reducer，数据更新');
    if (action.type === CHANGE_INPUT_VALUE) {
        const newState = JSON.parse(JSON.stringify(state));  // 对state做深拷贝
        newState.inputValue = action.value;
        return newState;    //返回新state数据 替换旧state
    }
    if (action.type === ADD_TODO_ITEM) {
        const newState = JSON.parse(JSON.stringify(state));  // 对state做深拷贝
        newState.list.push(newState.inputValue);
        newState.inputValue = '';
        return newState;
    }
    if (action.type === DELETE_TODO_ITEM) {
        const newState = JSON.parse(JSON.stringify(state));  // 对state做深拷贝
        newState.list.splice(action.index, 1);
        return newState
    }
    if (action.type === INIT_LIST_ACTION) {
        const newState = JSON.parse(JSON.stringify(state));  // 对state做深拷贝
        newState.list = action.data
        return newState
    }
    return state;
}