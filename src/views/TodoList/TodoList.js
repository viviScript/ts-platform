import React, {Component} from 'react';
import { Input, Button, List } from 'antd';
import store from '../../store/index.js'    // 引入redux数据
// import { CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM } from '../../store/actionTypes'    // 引入action常量
import {getInputChangeAction, getAddItemAction, getDeleteTodoAction} from '../../store/actionCreators';    // 引入action方法
class TodoList extends Component{
    constructor(props) {
        super(props);
        // store getState()方法获取store仓库数据
        this.state = store.getState();
        console.log(store.getState());
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleStoreChange = this.handleStoreChange.bind(this);
        this.handleBtnClick = this.handleBtnClick.bind(this);
        store.subscribe(this.handleStoreChange);   // 订阅store，并监听
    }
    render() {
        return (
            <div>
                <div style={{marginTop: '10px', marginLeft: '10px'}}>
                    <Input
                        value={this.state.inputValue}
                        onChange={this.handleInputChange}
                        placeholder='todo info' style={{width: '300px'}} />
                    <Button onClick={this.handleBtnClick} type="primary">提交</Button>
                </div>
                <List
                    size="large"
                    style={{width: '300px', marginLeft: '10px'}}
                    bordered
                    dataSource={this.state.list}
                    renderItem={(item, index) => (<List.Item onClick={this.handleItemDelete.bind(this,index)}>{item}</List.Item>)}
                />
            </div>
        )
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