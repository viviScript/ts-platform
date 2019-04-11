import { combineReducers } from 'redux';
import reducer_one from './reducer_one';
import reducer_two from './reducer_two';

export default combineReducers({
    reducer_one,
    reducer_two
})