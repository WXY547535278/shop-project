import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '../components/tabbar/HomeContainer.vue'
import member from '../components/tabbar/MemberContainer.vue'
import search from '../components/tabbar/SearchContainer.vue'
import shopcar from '../components/tabbar/ShopcarContainer.vue'
import newslist from '../components/news/NewsList.vue'
import newsinfo from '../components/news/NewsInfo.vue'
import photolist from '../components/photo/photolist.vue'
import PhotoInfo from '../components/photo/photoInfo.vue'
import GoodsList from '../components/goods/GoodsList.vue'
import GoodsInfo from '../components/goods/GoodsInfo.vue'
Vue.use(VueRouter)

export default new VueRouter({
    routes: [
        { path: '/', redirect: '/home' },
        { path: '/home', component: home },
        { path: '/member', component: member },
        { path: '/search', component: search },
        { path: '/shopcar', component: shopcar },
        { path: '/home/newslist', component: newslist },
        { path: '/home/newsinfo/:id', component: newsinfo },
        { path: '/home/photolist', component: photolist },
        { path: '/home/photoinfo/:id', component: PhotoInfo },
        { path: '/home/goodslist', component: GoodsList },
        { path: '/home/goodsinfo/:id', component: GoodsInfo },
    ],
    linkActiveClass: 'mui-active' //覆盖默认的路由高亮类，默认的类叫做router-link-active
})