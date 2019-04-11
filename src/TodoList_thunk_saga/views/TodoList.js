import React, {Component} from 'react';
import store from '../store'    // 引入redux数据
// import { CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM } from '../../store/actionTypes'    // 引入action常量
import {
    getInputChangeAction,
    getAddItemAction,
    getDeleteTodoAction,
    // getTodoList,
    getInitList
} from '../store/actionCreators';    // 引入action方法
import TodoListUi from './TodoListUi'
// import axios from 'axios';
require('../mock');    // 引入模拟数据
class TodoList extends Component{
    constructor(props) {
        super(props);
        // store getState()方法获取store仓库数据
        this.state = store.getState();
        console.log(store.getState());
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleStoreChange = this.handleStoreChange.bind(this);
        this.handleBtnClick = this.handleBtnClick.bind(this);
        this.handleItemDelete = this.handleItemDelete.bind(this)
        store.subscribe(this.handleStoreChange);   // 订阅store，并监听
    }
    render() {
        return (
            <TodoListUi
                inputValue={this.state.inputValue}
                handleInputChange={this.handleInputChange}
                handleBtnClick={this.handleBtnClick}
                handleItemDelete={this.handleItemDelete}
                list={this.state.list}
            />
        )
    }
    componentDidMount() {
        // 普通使用
        // axios.get('/api/test').then((res) => {
        //     console.log(res)
        //     const data = res.data.list;
        //     const action = initListAction(data);
        //     store.dispatch(action)
        // })

        // 使用redux-thunk中action调用异步请求
        // const action = getTodoList();
        // store.dispatch(action);

        // 使用redux-saga中action调用异步请求
        const action = getInitList();
        store.dispatch(action)
    }

    handleInputChange (e) {
        // action描述
        // const action = {
        //     type: CHANGE_INPUT_VALUE,
        //     value: e.target.value
        // };
        const action = getInputChangeAction(e.target.value);    // 调用action方法
        store.dispatch(action);  // store触发action
    }
    // store监听事件
    handleStoreChange () {
        // console.log('storeChange')
        this.setState(store.getState()) // 当感知到store发生变化时，用stote数据替换当前state数据
    };
    handleBtnClick () {
        // const action = {
        //     type: ADD_TODO_ITEM
        // };
        const action = getAddItemAction()
        store.dispatch(action);
    };
    handleItemDelete (index) {
        // const action = {
        //     type: DELETE_TODO_ITEM,
        //     index: index
        // };
        const action = getDeleteTodoAction(index);
        store.dispatch(action);
    }
}
export default TodoList