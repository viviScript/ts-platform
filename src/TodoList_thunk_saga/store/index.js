import {applyMiddleware, createStore, compose} from 'redux';
import reducer from './reducer'    // reducer仓库 存储应用中所有的数据


/*
* 将reducer传入createStore函数，创建store仓库
* redux devtools开发者工具 window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
* */
// const store = createStore(
//     reducer,
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())


/*
* 使用redux-thunk中间件
* */
// import thunk from 'redux-thunk' // redux中间件
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;
// const enhancer = composeEnhancers(
//     applyMiddleware(thunk),
//     // other store enhancers if any
// );
// const store = createStore(
//     reducer,
//     enhancer);

/*
* 使用redux-saga中间价
* 创建saga*/
import createSagaMiddleware from 'redux-saga';
import sagas from './sagas';
const sagaMiddlewate = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;
const enhancer = composeEnhancers(
    applyMiddleware(sagaMiddlewate),
    // other store enhancers if any
);
const store = createStore(
    reducer,
    enhancer);
sagaMiddlewate.run(sagas);
export default store;

