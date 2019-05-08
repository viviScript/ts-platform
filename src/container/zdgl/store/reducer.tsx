import { fromJS } from 'immutable';
import * as actionTypes from './actionTypes';
const defaultState = fromJS({
    yyglList: []
});

export default (state = defaultState, action: any) => {
    switch (action.type) {
        case actionTypes.YY_LIST:
            return state.set('yyglList', action.values);
        default:
            return state;
    }
}