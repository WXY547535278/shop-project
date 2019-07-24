import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '../components/tabbar/HomeContainer.vue'
import member from '../components/tabbar/MemberContainer.vue'
import search from '../components/tabbar/SearchContainer.vue'
import shopcar from '../components/tabbar/ShopcarContainer.vue'
Vue.use(VueRouter)

export default new VueRouter({
    routes: [
        { path: '/', redirect: '/home' },
        { path: '/home', component: home },
        { path: '/member', component: member },
        { path: '/search', component: search },
        { path: '/shopcar', component: shopcar }
    ],
    linkActiveClass: 'mui-active' //覆盖默认的路由高亮类，默认的类叫做router-link-active
})