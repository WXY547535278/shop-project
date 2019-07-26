// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import VueResource from 'vue-resource'
Vue.use(VueResource)
import router from './router/index.js'
import 'mint-ui/lib/style.css'
import { Header, Swipe, SwipeItem, Button } from 'mint-ui'
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'
Vue.component(Header.name, Header)
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)
Vue.component(Button.name, Button)
import moment from 'moment'
Vue.filter('dateFormat', function(dataStr, pattern = "YYYY-MM-DD HH:mm:ss") {
        return moment(dataStr).format(pattern)
    })
    /* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    render: h => h(App)
})