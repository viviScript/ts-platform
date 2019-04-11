import React, {Component} from 'react';
import {Input, Button, List} from "antd";
import store from '../../store/index.js'
import {getBtnClick, getDeleteTodoItem, getInputChange, getTodoList } from '../../store/actionCreators';
require('../../../TodoList_thunk_saga/mock/index');    // 引入模拟数据

class TodoList extends Component{
    constructor(props) {
        super(props);
        this.state = store.getState().reducer_one;
        console.log(store.getState(), '1')
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleStoreChange = this.handleStoreChange.bind(this);
        this.handleBtnClick = this.handleBtnClick.bind(this);
        store.subscribe(this.handleStoreChange);   // store监听订阅
    }
    componentDidMount() {
        const action = getTodoList();
        store.dispatch(action)
    }

    handleStoreChange () {
        console.log(store.getState(), '2')
        this.setState(store.getState().reducer_one)
    }
    handleInputChange (e) {
        // const action = {
        //     type: 'input_change',
        //     value: e.target.value
        // }
        store.dispatch(getInputChange(e.target.value));
    }
    handleBtnClick () {
        // const action = {
        //     type: 'btn_click'
        // }
        store.dispatch(getBtnClick())
    }
    handleDeleteTodo (index) {
        // const action = {
        //     type: 'delete_todo_item',
        //     index
        // }
        store.dispatch(getDeleteTodoItem(index));
    }
    render() {
        return (
            <div>
                <div >
                    <Input
                        value={this.state.inputValue}
                        onChange={this.handleInputChange}
                        style={{width: '300px', marginLeft: '10px'}}
                        placeholder='todo list info'/>
                    <Button
                        onClick={this.handleBtnClick}
                        type='primary'>提交</Button>
                </div>
                <List
                    style={{width: '300px', marginLeft: '10px'}}
                    bordered
                    dataSource={this.state.list}
                    renderItem={(item, index) => (<List.Item onClick={this.handleDeleteTodo.bind(this, index)}> {item}</List.Item>)}
                />
            </div>
        )
    }
}
export default TodoList;