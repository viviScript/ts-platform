import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';  // or 'antd/dist/antd.less'



// import TodoList from './TodoList_demo/views/TodoList/TodoList';
// import TodoList from './TodoList_thunk_saga/views/TodoList';
// ReactDOM.render(<TodoList />, document.getElementById('root'));


/*
* 使用react-redux
* 第一核心API：Provider组件用来连接store
* 使其内部组件都有去获取到store中的数据
* */
// import TodoList from './TodoList_react_redux/views/TodoList';
import { Provider } from 'react-redux'  // 使用react-redux 引入Provider组件
// import store from './TodoList_react_redux/store'

import store from './store/index'
// import CfPlatForm from './views/CfPlatForm'
import CfLogin from './views/CfLogin'

const App = (
    <Provider store={store}>
        {/*<TodoList />*/}
        {/*<CfPlatForm />*/}
        <CfLogin />
    </Provider>
);

ReactDOM.render(App, document.getElementById('root'));
