import { api_getYyFind } from '../../../api/api'
import * as actionTypes from './actionTypes';
import { message } from 'antd';
import { fromJS } from 'immutable'
const ac_setYyList = (values: any) => ({
    type: actionTypes.YY_LIST,
    values: fromJS(values)
});

export const ac_getYyFind = () => {
    return (dispatch: any) => {
        api_getYyFind().then(res => {
            console.log(res, '应用列表');
            if (res.data.code === '200') {
                dispatch(ac_setYyList(res.data.data))
            } else {
                message.error('应用列表获取失败，请重试！')
            }
        })
    }
}