import { fromJS } from 'immutable';
import * as actionTypes from './actionTypes';
const defaultState = fromJS({
    yyglList: [],
    selectType: '',
    defaultKeys: [],
    listTree: [],
    tableLoading: false
});

export default (state = defaultState, action: any) => {
    switch (action.type) {
        case actionTypes.YY_LIST:
            return state.set('yyglList', action.values);
        case actionTypes.DEFAULT_KEYS:
            return state.set('defaultKeys', action.values);
        case actionTypes.SELECT_TYPE:
            return state.set('selectType', action.values);
        case actionTypes.TREE_LIST:
            return state.set('listTree', action.values);
        case actionTypes.TABLE_LOADING:
            return state.set('tableLoading', action.values);
        default:
            return state;
    }
}