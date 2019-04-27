// import { combineReducers } from 'redux';
import { combineReducers } from 'redux-immutable';  // 转immutable对象
import { reducer as loginReducer } from '../../container/login/store';
import {reducer as homeReducer } from '../../container/home/store';
import { reducer as YyglReducer } from '../../container/yygl/store'
export default combineReducers({
    loginReducer,
    homeReducer,
    YyglReducer
})