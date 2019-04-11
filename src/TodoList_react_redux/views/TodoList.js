import React, { Component } from 'react';
// import store from '../store/index';
import {
    getInputValue,
    getAddItem,
    getDeleteItem
} from '../store/actionCreators';
/*
* 使用react-redux
* 核心API：connect
* 通过connect方法获取store数据
* connect让组件与做连接
* */
import { connect } from 'react-redux';

function TodoList (props) {
    const {inputValue, handleInputChange, handleBtnClick, list, handleDeleteItem} = props;
    return (
        <div>
            <div>
                <input type="text"
                       value={inputValue}
                       onChange={handleInputChange}
                />
                <button onClick={handleBtnClick}>提交</button>
            </div>
            <ul>
                {list.map((item, index) => {
                    return (
                        <li key={index} onClick={() => {handleDeleteItem(index)}}>{item}</li>
                    )
                })}
            </ul>
        </div>
    )
}

// class TodoList extends Component{
//     render() {
//         const {inputValue, handleInputChange, handleBtnClick, list, handleDeleteItem} = this.props;
//         return (
//             <div>
//                 <div>
//                     <input type="text"
//                            value={inputValue}
//                            onChange={handleInputChange}
//                     />
//                     <button onClick={handleBtnClick}>提交</button>
//                 </div>
//                 <ul>
//                     {list.map((item, index) => {
//                         return (
//                             <li key={index} onClick={() => {handleDeleteItem(index)}}>{item}</li>
//                         )
//                     })}
//                 </ul>
//             </div>
//         )
//     }
// }
/*
* 把store里的数据映射给当前组件变成组件的props中
* state参数指的就是store中的数据
* */
const mapStateToProps = (state) => {
    return {
        inputValue: state.inputValue,
        list: state.list
    }
};
/*
* store.dispatch
* 把store的dispatch方法挂载到props上
* */
const mapDispatchToProps = (dispatch) => {
    return {
        handleInputChange (e) {
            const action = getInputValue(e.target.value);
            dispatch(action);
        },
        handleBtnClick () {
            const action = getAddItem();
            dispatch(action);
        },
        handleDeleteItem (index) {
            const action = getDeleteItem(index);
            dispatch(action);
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)