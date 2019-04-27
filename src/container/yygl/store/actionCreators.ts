import { api_getYyglList } from '../../../api/api';
import * as actionTypes from './actionTypes';
import { fromJS } from 'immutable';

const ac_setYyglList = (value: any) => ({
    type: actionTypes.YYGL_LIST,
    value: fromJS(value)
})
const ac_setTableLoading = (value: any) => ({
    type: actionTypes.TABLE_LOADING,
    value: fromJS(value)
})
export const ac_getYyglList = (values: any) => {
    return (dispatch: any) => {
        dispatch(ac_setTableLoading(true))
        api_getYyglList(values).then((res:any):void => {
            console.log(res, '应用管理列表');
            if (res.data.code == '200') {
                dispatch(ac_setYyglList(res.data.data))
            } else {
                console.log(JSON.parse(JSON.stringify(res.data.data)))
            }
            dispatch(ac_setTableLoading(false))
        });
    }
}

