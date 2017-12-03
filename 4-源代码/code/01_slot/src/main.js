import Vue from 'vue';

import App from './App.vue';

import MyUl from './MyUl.vue';
import MyLi from './MyLi.vue';
Vue.component(MyUl.name,MyUl);
Vue.component(MyLi.name,MyLi);



new Vue({
    el:'#app',
    render:c=>c(App)
})