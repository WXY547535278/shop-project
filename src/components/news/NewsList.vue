<template>
    <div>
        <ul class="mui-table-view">
		  <li class="mui-table-view-cell mui-media" v-for="item in newslist" :key="item.id">
            <!-- <router-link :to="'/home/newsinfo/' + item.id"> -->
			<router-link :to="'/home/newsinfo/' + item.id">
              <img class="mui-media-object mui-pull-left" :src="item.img_url">
              <div class="mui-media-body">
                <h1>{{ item.title }}</h1>
                <p class='mui-ellipsis'>
                  <span>发表时间：{{ item.add_time | dateFormat }}</span>
                  <span>点击：{{item.click}}次</span>
                </p>
              </div>
            </router-link>
          </li>
	    </ul>
    </div>
</template>

<style lang="scss">
.mui-table-view {
    li {
        h1 {
            font-size: 14px;
        }
        .mui-ellipsis {
            font-size: 12px;
            color: skyblue;
            display: flex;
            justify-content: space-between;
        }
    }
}
</style>

<script>
import { Toast } from "mint-ui";
export default {
    data() {
		return {
			// newslist: [
			// 	{ id: 1, title: '111', ctime: new Date(), click: 1 },
			// 	{ id: 2, title: '222', ctime: new Date(), click: 0 },
			// 	{ id: 3, title: '333', ctime: new Date(), click: 20 },
			// 	{ id: 4, title: '444', ctime: new Date(), click: 3 },
			// 	{ id: 5, title: '555', ctime: new Date(), click: 11 },
			// 	{ id: 6, title: '666', ctime: new Date(), click: 10 },
			// 	{ id: 7, title: '777', ctime: new Date(), click: 15 },
			// 	{ id: 8, title: '888', ctime: new Date(), click: 17 },
			// 	{ id: 9, title: '999', ctime: new Date(), click: 16 }
      // ]
      newslist:[]
		}
  },
  created() {
    this.getNewsList()
  },
  methods: {
    getNewsList() {
      this.$http.get("api/getnewslist").then(result => {
        if(result.body.status ===0 ){
          this.newslist = result.body.message;
        }else {
          Toast("获取新闻列表失败！")
        }
      })
    }
  },
}
</script>