import axios from 'axios';
import { getSession } from '../util'
import { USER_TOKEN } from '../config/common.const'
import { notification } from 'antd';
//取消请求
// let CancelToken = axios.CancelToken;

axios.defaults.headers['Authorization'] = (function () {
    return 'bearer ' + getSession(USER_TOKEN)
})();
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.timeout = 10000;
//开始请求设置，发起拦截处理
axios.interceptors.request.use(config => {
    console.log(config, '开始请求设置，发起拦截处理')
    return config
}, error => {
    console.log(error, '开始请求设置，发起拦截处理error')
    return Promise.reject(error)
});
// respone拦截器
axios.interceptors.response.use(
    response => {
        console.log(response, 'respone拦截器')

        const res = response.data;

        //这里根据后台返回来设置
        if (res.code === "500") {
            notification['error']({
                message: 'HTTP请求错误',
                description: `错误码：500,请检查服务是否异常！`,
            });
            return response
        } else {
            return response;
        }
    },
    (error: any): any => {
        let err = JSON.parse(JSON.stringify(error))
        notification['error']({
            message: 'HTTP请求错误',
            description: `${err.code ? err.code : 'NetWork Error'},请检查服务是否异常！`,
        });
        console.log(JSON.parse(JSON.stringify(error)), 'respone拦截器error')
        return Promise.reject(error)
    }
);

export default axios
