// import { combineReducers } from 'redux';
import { combineReducers } from 'redux-immutable';  // 转immutable对象
import { reducer as cfLoginReducer } from '../../views/CfLogin/store';

export default combineReducers({
    cfLoginReducer
})