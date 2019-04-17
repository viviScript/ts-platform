import * as actionTypes from './actionTypes';
import { fromJS } from 'immutable';
import {
    api_getMenuList
} from '../../../api/api';

export const ac_setMenuList = (value:any[]) => ({
    type: actionTypes.HOME_MENU_LIST,
    value: fromJS(value)
});
export const ac_getMenuList = () => {
    return (dispatch:any) => {
        api_getMenuList().then((res:any):void => {
            console.log(res, '获取菜单列表');
            dispatch(ac_setMenuList(res.data.data));
        });

    }
};