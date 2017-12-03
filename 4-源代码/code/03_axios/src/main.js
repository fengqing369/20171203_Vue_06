import Vue from 'vue';
import App from './App.vue';
import Axios from 'axios';

Vue.prototype.$axios = Axios;


//配置默认基础url
Axios.defaults.baseURL = 'http://localhost:3000/';
//this.$axios === Axios

//配置拦截器
//请求发起前
Axios.interceptors.request.use( (config)=>{

    //可以添加一些我们想要的头信息
    config.headers['myname'] = 'tjx';  
    //tjx如果没有值，也可以认为是未登录，标识自己的身份
    config.headers['yourname'] = 'rose';

    //打开lodding
    return config;
});
//响应回来后
Axios.interceptors.response.use( (response)=>{

    console.log(response);
    //可以根据 response.request.responseURL来区分判断
    //优化响应数据
    response.data.forEach( ele =>{
        ele.flag = true;
    });
    //关闭lodding
    return response;
});


new Vue({
    el:'#app',
    render:c=>c(App)
})