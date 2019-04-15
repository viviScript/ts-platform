import * as actionTypes from './actionTypes';
import { fromJS } from 'immutable';
import {setSession, removeSession} from "../../../util";
import {USER_TOKEN} from "../../../config/common.const";
import {message} from "antd";
import {
    getLogin
} from '../../../api/api';
export const ac_getUserNameChange = (value) => ({
    type: actionTypes.USER_NAME_CHANGE,
    value: fromJS(value)
});

export const ac_getUserPassWordChange = (value) => ({
    type: actionTypes.USER_PASSWORD_CHANGE,
    value: fromJS(value)
});
export const ac_getLoading = (value) => ({
    type: actionTypes.LOGIN_LOADING,
    value: fromJS(value)
});
export const ac_getLoginSubmit = (props) => {
    return (dispatch) => {
        dispatch(ac_getLoading(true));   // 开启loading
        props.history.push('/home');
        getLogin({
            username: props.userName,
            password: props.userPassWord
        }).then(res => {
            console.log(res, '登录');
            if (res.data.code === '200') {
                setSession(USER_TOKEN, res.data.data);
                message.success('恭喜您，登录成功！');
                props.history.push('/home')
            } else {
                removeSession(USER_TOKEN);
                message.error('登录失败，请重试！');
            }
            dispatch(ac_getLoading(false));   // 关闭loading
        }).catch(err => {
            removeSession(USER_TOKEN);
            message.error('登录失败，请重试！');
        })
    }
};