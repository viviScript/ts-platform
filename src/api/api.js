
import server from './server';
import URL from './server.config.js';

// 登录方法
// export function getLogin(data){
//     return server({
//         url: URL.login,
//         method: 'post',
//         dataType: "json",
//         contentType: "application/x-www-form-urlencoded;charset=UTF-8",
//         transformRequest: [function (data) {
//             // Do whatever you want to transform the data
//             let ret = '';
//             for (let it in data) {
//                 ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
//             }
//             return ret
//         }],
//         data: data
//     })
// }
export const getLogin = (data) => {
    return server({
        url: URL.login,
        method: 'post',
        dataType: "json",
        contentType: "application/x-www-form-urlencoded;charset=UTF-8",
        headers: {
            "Authorization": ''
        },
        transformRequest: [function (data) {
            // Do whatever you want to transform the data
            let ret = '';
            for (let it in data) {
                ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
            }
            return ret
        }],
        data: data
    })
};
export const api_getMenuList = () => {
    return server({
        url: URL.getRes + `?appCode=platform`,
        method: 'get',
        dataType: "json",
        contentType: "application/x-www-form-urlencoded;charset=UTF-8",
    })
};
