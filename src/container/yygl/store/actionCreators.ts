import { api_getYyglList, api_setYyglUpdate } from '../../../api/api';
import * as actionTypes from './actionTypes';
import { fromJS } from 'immutable';
import { message } from 'antd';
const ac_setYyglList = (value: any) => ({
    type: actionTypes.YYGL_LIST,
    value: fromJS(value)
});
const ac_setTableLoading = (value: any) => ({
    type: actionTypes.TABLE_LOADING,
    value: fromJS(value)
});
export const ac_getYyglList = (values: any = {pageNum: 1, pageSize: 10}) => {
    return (dispatch: any) => {
        dispatch(ac_setTableLoading(true));
        api_getYyglList(values).then((res:any):void => {
            console.log(res, '应用管理列表');
            if (res.data.code === '200') {
                dispatch(ac_setYyglList(res.data.data))
            } else {
                console.log(JSON.parse(JSON.stringify(res.data.data)));
                message.error('应用列表获取失败，请重试')
            }
            dispatch(ac_setTableLoading(false))
        });
    }
};

export const ac_setYyglUpdate = (values: any) => {
    return (dispatch: any) => {
        console.log(values, 'ac_setYyglUpdate');
        dispatch(ac_setTableLoading(true));
        api_setYyglUpdate(values).then((res:any) => {
            if (res.data.code === '200') {
                dispatch(ac_getYyglList());
                message.success('应用更新成功！');
            } else {
                message.error('应用更新失败，请重试');
            };
            dispatch(ac_setTableLoading(false));
        })
    }
};

