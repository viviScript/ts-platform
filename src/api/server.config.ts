
/***
 *
 *统一定义接口，有利于维护
 *
 **/

const HISTORY= 'http://192.168.0.70:8084/';
// const HISTORY= 'http://192.168.0.196:8085/';
export default {
    login: HISTORY + 'system/frame/login/sso', // 登录
    getRes: HISTORY + 'system/frame/auth/getRes',  // 菜单
    getFindPage: HISTORY + 'system/yy/findPage',  // 应用管理列表
    setUpdate: HISTORY + 'system/yy/update',  // 应用管理编辑
    getFind: HISTORY + 'system/yy/find'  // 查找应用
};
