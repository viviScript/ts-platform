import {
    INIT_LIST_ACTION,
    CHANGE_INPUT_VALUE,
    ADD_TODO_ITEM,
    DELETE_TODO_ITEM,
    GET_INIT_LIST
} from './actionTypes' // 引入action常量
import axios from "axios/index";


export const getInputChangeAction = (value) => ({
    type: CHANGE_INPUT_VALUE,
    value
});

export const getAddItemAction = () => ({
    type: ADD_TODO_ITEM
});
export const getDeleteTodoAction = (index) => ({
    type: DELETE_TODO_ITEM,
    index
});
export const initListAction = (data) => ({
    type: INIT_LIST_ACTION,
    data
});
// 利用redux-thunk 在action中做异步请求
export const getTodoList = () => {
    // 返回到参数中 会有dispatch提供使用
    return (dispatch) => {
        axios.get('/api/test').then((res) => {
            console.log(res)
            const data = res.data.list;
            const action = initListAction(data);
            dispatch(action)
        })
    }
};

export const getInitList = () => ({
    type: GET_INIT_LIST
});