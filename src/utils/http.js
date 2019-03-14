import axios from "axios";
import router from '../router'
import qs from "qs"
import store from "../store"

axios.defaults.timeout = 5000;
axios.defaults.baseURL = 'http://testweb.weixin101.com/global_vote/';
axios.defaults.withCredentials = true;


//http request 拦截器
axios.interceptors.request.use(
    config => {
        const token = sessionStorage.getItem('token'); //注意使用的时候需要引入cookie方法，推荐js-cookie
        // config.data = JSON.stringify(config.data);
        if (token) {
            config.headers = {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': token
            }
        } else {
            config.headers = {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': 'default'
            }
            router.push({
                path: "/login",
                // querry: { redirect: router.currentRoute.fullPath }//从哪个页面跳转
            })
        }
        // console.log(config);
        return config;

    },
    error => {
        return Promise.reject(error);
    }
);


//http response 拦截器
axios.interceptors.response.use(
    response => {
        // if (!response.data.status) {
        //     // router.push({
        //     //     path: "/login",
        //     //     // querry: { redirect: router.currentRoute.fullPath }//从哪个页面跳转
        //     // })
        // }
        return response;
    },
    error => {
        return Promise.reject(error)
    }
)


/**
 * 封装get方法
 * @param url
 * @param data
 * @returns {Promise}
 */

export function fetch(url, params) {
    return new Promise((resolve, reject) => {
        store.commit('showLoading');
        axios.get(url, {
                params: params
            })
            .then(response => {
                if (response.data.code == "214") {
                    window.location.href = "http://testweb.weixin101.com/global_vote/home/wechat/oauth?activityType=index&token=" + sessionStorage.getItem("token");
                    // sessionStorage.removeItem("token");
                    // router.push({
                    //     path: "/login",
                    //     // querry: { redirect: router.currentRoute.fullPath }//从哪个页面跳转
                    // })
                } else {
                    store.commit('hideLoading');
                    resolve(response.data);
                }
            })
            .catch(err => {
                reject(err)
            })
    })
}
/**
 * 封装post请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function post(url, data) {
    console.log(data);
    return new Promise((resolve, reject) => {
        store.commit('showLoading');
        axios.post(url, qs.stringify(data))
            .then(response => {
                if (response.data.code == "214") {
                    window.location.href = "http://testweb.weixin101.com/global_vote/home/wechat/oauth?activityType=index&token=" + sessionStorage.getItem("token");
                    // sessionStorage.removeItem("token");
                } else {
                    store.commit('hideLoading');
                    resolve(response.data);
                }
            }, err => {
                reject(err)
            })
    })
}