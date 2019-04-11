import {INPUT_CHANGE, BTN_CLICK, DELETE_TODO_ITEM, INIT_TODO_LIST} from './actionTypes';
import axios from "axios";
export const getInputChange = (value) => ({
    type: INPUT_CHANGE,
    value
})
export const getBtnClick = () => ({
    type: BTN_CLICK
})
export const getDeleteTodoItem = (index) => ({
    type: DELETE_TODO_ITEM,
    index
})
export const initTodoList = (data) => ({
    type: INIT_TODO_LIST,
    data
})
// redux-thunk使用
export const getTodoList = () => {
    return (dispatch) => {
        axios.get('/api/test').then((res) => {
            console.log(res)
            const data = res.data.list;
            const action = initTodoList(data);
            dispatch(action)
        })
    }
}