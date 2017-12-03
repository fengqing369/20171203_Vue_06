import Vue from 'vue';
import VueResource from 'vue-resource';
import App from './App.vue';

Vue.use(VueResource); //给Vue的原型挂载$http对象
//内部使用ajax请求 XMLHttpRequest


new Vue({
    el:'#app',
    render:c=>c(App)
})