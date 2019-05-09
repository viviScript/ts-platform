import { api_getYyFind, api_getZdTreeByType } from '../../../api/api'
import * as actionTypes from './actionTypes';
import { message } from 'antd';
import { fromJS } from 'immutable'
const ac_setYyList = (values: any) => ({
    type: actionTypes.YY_LIST,
    values: fromJS(values)
});
const ac_zdTreeList = (values: any) => ({
    type: actionTypes.TREE_LIST,
    values: fromJS(values)
});
const ac_tableLoading = (values: boolean) => ({
    type: actionTypes.TABLE_LOADING,
    values: fromJS(values)
});
export const ac_selectType = (values: string) => ({
    type: actionTypes.SELECT_TYPE,
    values: fromJS(values)
});
export const ac_defaultSelectedKeys = (values: string[]) => ({
    type: actionTypes.DEFAULT_KEYS,
    values: fromJS(values)
});
export const ac_getYyFind = () => {
    return (dispatch: any) => {
        api_getYyFind().then(res => {
            console.log(res, '应用列表');
            if (res.data.code === '200') {
                dispatch(ac_setYyList(res.data.data));
                dispatch(ac_defaultSelectedKeys([res.data.data[0].id]));
                dispatch(ac_selectType(res.data.data[0].type));
                dispatch(ac_getZdTreeByType(res.data.data[0]));
            } else {
                message.error('应用列表获取失败，请重试！')
            }
        })
    }
}
export const ac_getZdTreeByType = (values: any) => {
    return (dispatch: any) => {
        dispatch(ac_tableLoading(true));
        api_getZdTreeByType(values).then((res: any) => {
            console.log(res.data.data, '应用列表树列表');
            if (res.data.code === '200') {
                dispatch(ac_zdTreeList(res.data.data))
            } else {
                message.error('应用列表获取失败，请重试！')
            }
            dispatch(ac_tableLoading(false));
        }).catch(() => {
            message.error('应用列表获取失败，请重试！')
            dispatch(ac_tableLoading(false));
        })
    }
}