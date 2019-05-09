import * as actionTypes from './actionTypes'
import { fromJS } from 'immutable'

const defaultState = fromJS({
    list: [],
    tableLoading: false
});
export default (state = defaultState, action: any) => {
    switch (action.type) {
        case actionTypes.YYGL_LIST:
            return state.set('list', action.value);
        case actionTypes.TABLE_LOADING:
            return state.set('tableLoading', action.value);
        default:
            return state;
    }
}