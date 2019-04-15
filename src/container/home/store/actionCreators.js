import * as actionTypes from './actionTypes';
import { fromJS } from 'immutable';
import {
    getMenuRes
} from '../../../api/api';

export const setMenuList = (value) => ({
    type: actionTypes.HOME_MENU_LIST,
    value: fromJS(value)
});
export const getMenu = () => {
    return (dispatch) => {
        getMenuRes().then(res => {
            console.log(res, '获取菜单列表');
            dispatch(setMenuList(res.data.data));
        });

    }
};