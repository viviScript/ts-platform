import { takeEvery, put } from 'redux-saga/effects';
import {GET_INIT_LIST} from "./actionTypes";
import axios from "axios/index";
import {initListAction} from "./actionCreators";


function* getInitList() {

    // axios.get('/api/test').then((res) => {
    //     const data = res.data.list;
    //     const action = initListAction(data);
    //     put(action)
    // })

    const res = yield axios.get('/api/test');
    const action = initListAction(res.data.list);
    yield put(action)
}
// generator 函数
function* sagas() {
    // 接受类型为GET_INIT_LIST, 并执行action  getInitList
    yield takeEvery(GET_INIT_LIST, getInitList)
}
export default sagas