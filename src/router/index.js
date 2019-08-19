import Vue from 'vue'
import VueRouter from 'vue-router'
// import home from '../components/tabbar/HomeContainer.vue'
// import member from '../components/tabbar/MemberContainer.vue'
// import search from '../components/tabbar/SearchContainer.vue'
// import shopcar from '../components/tabbar/ShopcarContainer.vue'
// import newslist from '../components/news/NewsList.vue'
// import newsinfo from '../components/news/NewsInfo.vue'
// import photolist from '../components/photo/photolist.vue'
// import PhotoInfo from '../components/photo/photoInfo.vue'
// import GoodsList from '../components/goods/GoodsList.vue'
// import GoodsInfo from '../components/goods/GoodsInfo.vue'
// import GoodsDesc from '../components/goods/GoodsDesc.vue'
import GoodsComment from '../components/goods/GoodsComment.vue'

Vue.use(VueRouter)

export default new VueRouter({
    routes: [
        { path: '/', redirect: '/home' },
        { path: '/home', component: resolve => require(['../components/tabbar/HomeContainer.vue'], resolve) },
        { path: '/member', component: resolve => require(['../components/tabbar/MemberContainer.vue'], resolve) },
        { path: '/search', component: resolve => require(['../components/tabbar/SearchContainer.vue'], resolve) },
        { path: '/shopcar', component: resolve => require(['../components/tabbar/ShopcarContainer.vue'], resolve) },
        { path: '/home/newslist', component: resolve => require(['../components/news/NewsList.vue'], resolve) },
        { path: '/home/newsinfo/:id', component: resolve => require(['../components/news/NewsInfo.vue'], resolve) },
        { path: '/home/photolist', component: resolve => require(['../components/photo/photolist.vue'], resolve) },
        { path: '/home/photoinfo/:id', component: resolve => require(['../components/photo/photoInfo.vue'], resolve) },
        { path: '/home/goodslist', component: resolve => require(['../components/goods/GoodsList.vue'], resolve) },
        { path: '/home/goodsinfo/:id', component: resolve => require(['../components/goods/GoodsInfo.vue'], resolve) },
        { path: '/home/goodsdesc/:id', component: resolve => require(['../components/goods/GoodsDesc.vue'], resolve), name: 'goodsdesc' },
        { path: '/home/goodscomment/:id', component: resolve => require(['../components/goods/GoodsComment.vue'], resolve), name: 'goodscomment' },
    ],
    linkActiveClass: 'mui-active' //覆盖默认的路由高亮类，默认的类叫做router-link-active
})