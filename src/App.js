import React, { Component } from 'react';
import 'antd/dist/antd.css';  // or 'antd/dist/antd.less'
import { BrowserRouter, Route } from 'react-router-dom';
// import TodoList from './TodoList_demo/container/TodoList/TodoList';
// import TodoList from './TodoList_thunk_saga/container/TodoList';
// ReactDOM.render(<TodoList />, document.getElementById('root'));


/*
* 使用react-redux
* 第一核心API：Provider组件用来连接store
* 使其内部组件都有去获取到store中的数据
* */
// import TodoList from './TodoList_react_redux/container/TodoList';
import { Provider } from 'react-redux'  // 使用react-redux 引入Provider组件
// import store from './TodoList_react_redux/store'
// import Routes from './routes'
import store from './store/index'
import Home from './container/home'
import Login from './container/login'
class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <div className="App">
                        <Route path='/' exact component={Login}>
                        </Route>
                        <Route path='/home' exact component={Home}>
                        </Route>
                    </div>
                </BrowserRouter>
            </Provider>
        );
    }
}

export default App;
