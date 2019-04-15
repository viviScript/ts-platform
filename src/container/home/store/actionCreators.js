import * as actionTypes from './actionTypes';
import { fromJS } from 'immutable';
import {
    api_getMenuList
} from '../../../api/api';

export const ac_setMenuList = (value) => ({
    type: actionTypes.HOME_MENU_LIST,
    value: fromJS(value)
});
export const ac_getMenuList = () => {
    return (dispatch) => {
        api_getMenuList().then(res => {
            console.log(res, '获取菜单列表');
            dispatch(ac_setMenuList(res.data.data));
        });

    }
};