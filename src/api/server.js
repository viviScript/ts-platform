import axios from 'axios';
import { getSession } from '../util'
import { USER_TOKEN } from '../config/common.const'
//取消请求
// let CancelToken = axios.CancelToken;

axios.defaults.headers['Authorization'] = (function () {
    return 'bearer ' + getSession(USER_TOKEN)
})();
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

//开始请求设置，发起拦截处理
axios.interceptors.request.use(config => {

    return config
}, error => {
    return Promise.reject(error)
});
// respone拦截器
axios.interceptors.response.use(
    response => {
        const res = response.data;

        //这里根据后台返回来设置
        if (res.msg === "success") {
            return response.data;
        } else {
            return response;
        }
    },
    error => {
        return Promise.reject(error)
    }
);

export default axios
