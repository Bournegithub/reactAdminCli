import axios from "axios";
import { cleanStorage } from "../utils/localStorage"


// let base = "/api";
// 配置允许跨域携带cookie
axios.defaults.withCredentials = true;
// 超时
axios.defaults.timeout = 100000;
// 请求前拦截
axios.interceptors.request.use(
    config => {
        return config;
    },
    err => {
        console.log("请求超时");
        return Promise.reject(err);
    }
);

// 返回后拦截
axios.interceptors.response.use(
    data => {
        console.log('interceptors-data', data);
        if (data.status === 200 && data.data.data) {
            return Promise.resolve(data.data);
        } else {
            // 常见错误指令
            if (data.data.code === '401' || data.data.code === '403') {
                // 清除缓存重新登录
                cleanStorage();
                this.props.history.push('/home');
            }
            return Promise.reject(data.data);
        }
    },
    err => {
        // 此处引用组件
        console.log('interceptors-err', err);
        if (err.response.status === 504 || err.response.status === 404) {
            console.log("服务器被吃了⊙﹏⊙∥");
        } else if (err.response.status === 401) {
            console.log("登录信息失效⊙﹏⊙∥");
        } else if (err.response.status === 500) {
            console.log("服务器开小差了⊙﹏⊙∥");
        }
        return Promise.reject(err);
    }
);

// @RequestBody请求
const HttpPost_Body = (url, params) => {
    return axios({
        method: "post",
        // url: `${base}${url}`,
        url: url,
        data: params,
        headers: {
            "Content-Type": "application/json",
            charset: "utf-8"
        }
    });
};

// @RequsetParam请求
const HttpPost_Param = (url, params) => {
    return axios({
        method: "post",
        // url: `${base}${url}`,
        url: url,
        data: params,
        transformRequest: [
            function(data) {
                let ret = "";
                for (let it in data) {
                    ret +=
                        encodeURIComponent(it) + "=" + encodeURIComponent(data[it]) + "&";
                }
                return ret;
            }
        ],
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        }
    });
};

const HttpGet = (url, params) => {
    return axios({
        method: "get",
        // url: `${base}${url}`
        url: `${url}`,
        params: {params}
    });
};

// const multiple = function(requsetArray, callback) {
//     axios.all(requsetArray).then(axios.spread(callback));
// };

export { HttpGet, HttpPost_Body, HttpPost_Param}

// Component.prototype.get = get;
// Component.prototype.postRequestBody = postRequestBody;
// Component.prototype.postRequestParam = postRequestParam;
// Component.prototype.multiple = multiple;
