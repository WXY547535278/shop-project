// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
    // import router from './router/index.js'
import 'mint-ui/lib/style.css'
import { Header } from 'mint-ui'
import './lib/mui/css/mui.min.css'
Vue.component(Header.name, Header)

/* eslint-disable no-new */
new Vue({
    el: '#app',
    // router,
    render: h => h(App)
})