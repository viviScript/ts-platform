import React, {Component, Fragment} from "react";
import TodoItem from './TodoItem'
class TodoList extends Component{
    constructor(props) {
        super(props);
        this.state = {
            inputValue: '111',
            list: []
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleBtnClick = this.handleBtnClick.bind(this);
        this.handleItemDelete = this.handleItemDelete.bind(this);
    }
    render() {
        return (
            <Fragment>
                <div>
                    <input type="text"
                           value={this.state.inputValue}
                           onChange={this.handleInputChange}
                    />
                    <button onClick={this.handleBtnClick}>提交</button>
                </div>
                <ul>
                    {this.getTodoItem()}
                </ul>
            </Fragment>
        )
    }
    getTodoItem () {
        return this.state.list.map((item, index) => {
                return (
                    <TodoItem
                        deleteItem={this.handleItemDelete.bind(this)}
                        key={index} content={item}
                        index={index}
                    />
                )
            })
    }
    handleInputChange (e) {
        // 新版本语法  返回一个对象
        const value = e.target.value
        this.setState(() => ({
                inputValue: value
            })
        )
        // this.setState({
        //     inputValue: e.target.value
        // })
    }
    handleBtnClick () {
        this.setState((prevState) => ({
            list: [...prevState.list, prevState.inputValue],
            inputValue: ''
        }))
        // this.setState({
        //     list: [...this.state.list, this.state.inputValue],
        //     inputValue: ''
        // })
    }
    handleItemDelete (index) {
        this.setState((prevState) => {
            let ary = [...prevState.list];
            ary.splice(index, 1);
            return {
                list: ary
            }
        })
        // this.setState({
        //     list: ary
        // })
    }
}
export default TodoList;