import * as actionTypes from './actionTypes';
import { fromJS } from 'immutable';
import {setSession, removeSession} from "../../../util";
import {USER_TOKEN} from "../../../config/common.const";
import {message} from "antd";
import {
    getLogin
} from '../../../api/api';
export const getUserNameChange = (value) => ({
    type: actionTypes.USER_NAME_CHANGE,
    value: fromJS(value)
});

export const getUserPassWordChange = (value) => ({
    type: actionTypes.USER_PASSWORD_CHANGE,
    value: fromJS(value)
});
export const getLoading = (value) => ({
    type: actionTypes.LOGIN_LOADING,
    value: fromJS(value)
});
export const getLoginSubmit = (userName, userPassWord) => {
    return (dispatch) => {
        dispatch(getLoading(true));   // 开启loading
        getLogin({
            username: userName,
            password: userPassWord
        }).then(res => {
            console.log(res, '登录');
            if (res.data.code === '200') {
                setSession(USER_TOKEN, res.data.data);
                message.success('恭喜您，登录成功！');
            } else {
                removeSession(USER_TOKEN);
                message.error('登录失败，请重试！');
            }
            dispatch(getLoading(false));   // 关闭loading
        })
    }
};