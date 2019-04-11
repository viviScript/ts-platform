import React, {Component} from 'react';
import {Button, Input, List} from "antd/lib/index";
const TodoListUi = (props) => {
    return (
        <div>
            <div style={{marginTop: '10px', marginLeft: '10px'}}>
                <Input
                    value={props.inputValue}
                    onChange={props.handleInputChange}
                    placeholder='todo info' style={{width: '300px'}} />
                <Button onClick={props.handleBtnClick} type="primary">提交</Button>
            </div>
            <List
                size="large"
                style={{width: '300px', marginLeft: '10px'}}
                bordered
                dataSource={props.list}
                renderItem={(item, index) => (<List.Item onClick={() => {props.handleItemDelete(index)}}>{item}</List.Item>)}
            />
        </div>
    )
}
// class TodoListUi extends Component{
//     render() {
//         return (
//             <div>
//                 <div style={{marginTop: '10px', marginLeft: '10px'}}>
//                     <Input
//                         value={this.props.inputValue}
//                         onChange={this.props.handleInputChange}
//                         placeholder='todo info' style={{width: '300px'}} />
//                     <Button onClick={this.props.handleBtnClick} type="primary">提交</Button>
//                 </div>
//                 <List
//                     size="large"
//                     style={{width: '300px', marginLeft: '10px'}}
//                     bordered
//                     dataSource={this.props.list}
//                     renderItem={(item, index) => (<List.Item onClick={(index) => {this.props.handleItemDelete(index)}}>{item}</List.Item>)}
//                 />
//             </div>
//         )
//     }
// }
export default TodoListUi;