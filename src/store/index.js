import { createStore } from 'redux';
import reducer from  './reducer'    // reducer仓库 存储应用中所有的数据
/*
* 将reducer传入createStore函数，创建store仓库
* redux devtools开发者工具 window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
* */
const store = createStore(reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store;

