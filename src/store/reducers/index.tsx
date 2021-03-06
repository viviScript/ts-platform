// import { combineReducers } from 'redux';
import { combineReducers } from 'redux-immutable';  // 转immutable对象
import { reducer as loginReducer } from '../../container/login/store';
import {reducer as homeReducer } from '../../container/home/store';
import { reducer as yyglReducer } from '../../container/yygl/store'
import { reducer as zdglReducer } from '../../container/zdgl/store';
export default combineReducers({
    loginReducer,
    homeReducer,
    yyglReducer,
    zdglReducer
})