import server from "./server";
import URL from "./server.config";

// 登录方法
export const getLogin = (data: any):any => {
  return server({
    url: URL.login,
    method: "post",
    dataType: "json",
    contentType: "application/x-www-form-urlencoded;charset=UTF-8",
    headers: {
      Authorization: ""
    },
    transformRequest: [
      function(data) {
        // Do whatever you want to transform the data
        let ret = "";
        for (let it in data) {
          ret +=
            encodeURIComponent(it) + "=" + encodeURIComponent(data[it]) + "&";
        }
        return ret;
      }
    ],
    data: data
  });
};
export const api_getMenuList = () => {
  // return server({
  //     url: URL.getRes + `?appCode=platform`,
  //     method: 'get',
  //     dataType: "json",
  //     contentType: "application/x-www-form-urlencoded;charset=UTF-8",
  // })
  return server.get(URL.getRes + `?appCode=platform`);
};

export const api_getYyglList = (values: any) => {
  return server({
    url: URL.getFindPage,
    method: "post",
    transformRequest: [
      function(data) {
        // Do whatever you want to transform the data
        let ret = "";
        for (let it in data) {
          ret +=
            encodeURIComponent(it) + "=" + encodeURIComponent(data[it]) + "&";
        }
        return ret;
      }
    ],
    contentType: "application/x-www-form-urlencoded; charset=UTF-8",
    data: values
  });
};
export const api_setYyglUpdate = (values: any) => {
  return server({
    url: URL.setUpdate,
    method: "post",
    transformRequest: [
      function(data) {
        // Do whatever you want to transform the data
        let ret = "";
        for (let it in data) {
          ret +=
              encodeURIComponent(it) + "=" + encodeURIComponent(data[it]) + "&";
        }
        return ret;
      }
    ],
    contentType: "application/x-www-form-urlencoded; charset=UTF-8",
    data: values
  });
};
export const api_getYyFind = () => {
  return server.post(URL.getFind, {
    yylx: 2
  })
};


